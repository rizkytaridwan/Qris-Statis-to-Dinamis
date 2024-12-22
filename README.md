# QRIS Code Generator

This project provides a web-based QRIS (Quick Response Code Indonesian Standard) generator that converts a static QRIS code into a dynamic one. It allows users to input a QRIS code, nominal value, and optional service fee (either in rupiah or percentage) and generate a dynamic QRIS code that can be displayed as a QR code image.

## Features

- Input QRIS code and nominal amount.
- Option to include a service fee (either as a percentage or fixed amount).
- Generate dynamic QRIS code with calculated total.
- Display generated QR code image.

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js

## Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://npmjs.com) (v6 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/rizkytaridwan/Qris-Statis-to-Dinamis.git
   cd qris-code-generator
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
   This will start the server on http://localhost:8000.

## Endpoints

POST /generate-qris
This endpoint generates a dynamic QRIS code based on the input parameters.

## Request Body :
```bash
{
  "qrisCode": "QRIS_CODE",
  "nominal": "100000",
  "feeType": "p",
  "fee": "2.5",
  "includeFee": true
}
```

## Response :

```bash
{
  "qrCode": "data:image/png;base64,...",
  "output": "QRIS_CODE_OUTPUT_STRING"
}
```

##
| Parameter   | Type     | Description                                                                                      |
|-------------|----------|------------------------------------------------------------------------------------------------|
| `qrisCode`  | `string` | The static QRIS code (e.g., `0102115802ID...`).                                                |
| `nominal`   | `number` | The nominal value (in Rupiah) to be processed.                                                 |
| `feeType`   | `string` | The type of fee, either:                                                                       |
|             |          |  `"r"` for Rupiah (fixed amount)                                                              |
|             |          |  `"p"` for percentage (a percentage of the nominal)                                           |
| `fee`       | `number` | The service fee value. This can either be a fixed amount (if `feeType` is `"r"`) or a percentage (if `feeType` is `"p"`). |
| `includeFee`| `boolean`| Whether to include the fee in the final amount. If `true`, the fee will be added to the nominal value, otherwise, it will be excluded. |


