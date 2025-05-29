# Solana Pay QR Code Generator

A simple webpage that generates a QR code for Solana Pay transactions.

## Files

- `index.html` - Simple HTML page that displays the QR code
- `app.js` - JavaScript file that generates the QR code using @solana/pay
- `webpack.config.js` - Webpack configuration for bundling

## Usage

1. **Edit the payment URL**: Open `app.js` and modify the `SOLANA_PAY_URL` constant with your desired Solana Pay URL.

2. **Run the development server**:
   ```bash
   npm run dev
   ```
   This will start a development server at http://localhost:3000 and automatically open your browser.

3. **Build for production**:
   ```bash
   npm run build
   ```
   This creates a `dist/` folder with the bundled JavaScript that you can serve statically.

## Customizing the Payment URL

Edit the `SOLANA_PAY_URL` in `app.js`:

```javascript
const SOLANA_PAY_URL = 'solana:YOUR_WALLET_ADDRESS?amount=0.01&label=Your%20Label';
```

The QR code will automatically update when you change this URL and refresh the page. 