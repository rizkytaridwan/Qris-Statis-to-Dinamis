QRIS Code Generator
This project provides a QRIS (Quick Response Code Indonesian Standard) code generator API and web interface to convert a static QRIS code into a dynamic one, including the option to add a service fee (either in Rupiah or as a percentage).

Features
QRIS Code Generation: Generate QRIS codes based on input data.
Dynamic Fee Handling: Option to include a service fee as either a fixed amount (Rupiah) or a percentage.
API Integration: A backend API to handle QRIS code generation and return the generated QR code.
Web Interface: A user-friendly web interface to input the necessary data and generate QRIS codes dynamically.
CRC16 Validation: QRIS code validation via CRC16 checksum to ensure data integrity.
Tech Stack
Frontend: HTML, CSS, JavaScript
Backend: Node.js with Express.js
QR Code Generation: qrcode npm package
Checksum Calculation: Custom CRC16 implementation
Installation
Prerequisites
Ensure you have Node.js installed. You can download it from Node.js official website.

Steps to Set Up
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/qris-code-generator.git
cd qris-code-generator
Install the required dependencies:

bash
Copy code
npm install
Start the server:

bash
Copy code
npm start
The server will be running at http://localhost:8000.

Folder Structure
php
Copy code
qris-code-generator/
│
├── public/                   # Contains the frontend files (HTML, CSS, JS)
│   └── index.html            # Main HTML file
├── lib/                      # Contains utility functions (padding, CRC16 calculation)
│   └── index.js              # Custom JS functions (pad, toCRC16, dataQris)
├── server.js                 # Backend server (Express.js)
├── package.json              # Project metadata and dependencies
└── README.md                 # This file
Usage
Web Interface
Open http://localhost:8000 in your browser.
Enter the QRIS Code, Nominal, and choose whether to include a service fee.
If including a service fee, select the Fee Type (Rupiah or Percent) and enter the fee amount.
Click the Generate QR Code button to generate a dynamic QRIS code.
The generated QR code will be displayed on the page.
API Endpoint
POST /generate-qris: Generate a dynamic QRIS code.
Request body:

json
Copy code
{
  "qrisCode": "0102110002010003001100025802ID010212345678901234567890123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789",
  "nominal": 100000,
  "feeType": "p",
  "fee": 5
}
Response:

json
Copy code
{
  "qrCode": "data:image/png;base64,...",
  "output": "0102110002010003001100025802ID010212345678901234567890123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789"
}
Error Handling
If any required fields are missing or the values are invalid, the API will return an error response with a message.

Example error response:

json
Copy code
{
  "error": "QRIS Code, Nominal, Fee Type, and Fee are required"
}
Contributing
Feel free to open issues or submit pull requests to improve the project.

Fork the repository.
Create a new branch (git checkout -b feature/feature-name).
Make your changes and commit them (git commit -am 'Add new feature').
Push to the branch (git push origin feature/feature-name).
Open a pull request.
