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
- **QR Code Generation:** `qrcode` library
- **Utility Functions:** Custom utility functions for padding and CRC16 checksum calculation

## Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://npmjs.com) (v6 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/qris-code-generator.git
   cd qris-code-generator
