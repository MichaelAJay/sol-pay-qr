# Solana Pay QR Code Generator

## TL;DR

```bash
npm install
npm run dev
```

1. Open `app.js`
2. Change the `SOLANA_PAY_URL` string to your payment URL
3. Save file - page auto-reloads with new QR code
4. Done!

---

A simple webpage that generates a QR code for Solana Pay transactions.

## Files

- `index.html` - Simple HTML page that displays the QR code
- `app.js` - JavaScript file that generates the QR code using @solana/pay
- `webpack.config.js` - Webpack configuration for bundling

## Usage

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```
   This will start a development server at http://localhost:3000 and automatically open your browser.

3. **Edit the payment URL**: Open `app.js` and modify the `SOLANA_PAY_URL` constant with your desired Solana Pay URL. The page will automatically reload when you save the file.

4. **Build for production**:
   ```bash
   npm run build
   ```
   This creates a `dist/` folder with the bundled JavaScript that you can serve statically.

## Customizing the Payment URL

Edit the `SOLANA_PAY_URL` in `app.js`:

```javascript
const SOLANA_PAY_URL = 'solana:YOUR_WALLET_ADDRESS?amount=0.01&label=Your%20Label';
```

Save the file and the QR code will automatically update in your browser! 