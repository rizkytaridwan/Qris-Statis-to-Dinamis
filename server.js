const express = require("express");
const path = require("path");
const qrcode = require("qrcode");
const { pad, toCRC16 } = require("./lib/index");
const cors = require("cors");

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(express.static(path.join(__dirname, "public")));

const qrCodeStore = new Map();

app.post("/generate-qris", (req, res) => {
  const { qrisCode, nominal, feeType, fee } = req.body;

  if (!qrisCode || nominal === undefined || !feeType || fee === undefined) {
    return res
      .status(400)
      .json({ error: "QRIS Code, Nominal, Fee Type, and Fee are required" });
  }

  try {
    let adjustedNominal = parseInt(nominal, 10);
    let tax = parseFloat(fee);

    if (isNaN(adjustedNominal) || adjustedNominal < 0) {
      return res.status(400).json({ error: "Invalid nominal value" });
    }
    if (isNaN(tax) || tax < 0) {
      return res.status(400).json({ error: "Invalid fee value" });
    }

    if (feeType === "p") {
      adjustedNominal += adjustedNominal * (tax / 100);
    } else if (feeType === "r") {
      adjustedNominal += tax;
    }

    let qris2 = qrisCode.slice(0, -4);
    let replaceQris = qris2.replace("010211", "010212");
    let pecahQris = replaceQris.split("5802ID");
    let uang = "54" + pad(adjustedNominal.toString().length) + adjustedNominal;

    let taxString =
      feeType === "p"
        ? "55020357" + pad(fee.toString().length) + fee
        : "55020256" + pad(fee.toString().length) + fee;
    uang += taxString.length === 0 ? "5802ID" : taxString + "5802ID";

    let output = pecahQris[0].trim() + uang + pecahQris[1].trim();
    output += toCRC16(output);

    const expirationTime = Date.now() + 30 * 60 * 1000;
    qrCodeStore.set(output, expirationTime);

    qrcode.toDataURL(output, { errorCorrectionLevel: "H" }, (err, url) => {
      if (err) return res.status(500).send("Error generating QR code");
      res.json({ qrCode: url, output });
    });
  } catch (error) {
    console.error("Error processing QRIS code:", error);
    res
      .status(500)
      .json({ error: "An error occurred while processing the QRIS code" });
  }
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
