import { createQR } from '@solana/pay';

// Static Solana Pay URL - replace this with your actual payment URL
const SOLANA_PAY_URL = 'solana:mvines9iiHiQTysrwkJjGf2gb9Ex9jXJX8ns3qwf2kN?amount=0.01&label=Test%20Payment';

function generateQR() {
    const qrContainer = document.getElementById('qr-code');
    const urlDisplay = document.getElementById('url-display');
    
    // Clear any existing QR code
    qrContainer.innerHTML = '';
    
    // Create and append the QR code
    const qr = createQR(SOLANA_PAY_URL, 300);
    qr.append(qrContainer);
    
    // Display the URL
    urlDisplay.textContent = SOLANA_PAY_URL;
}

// Generate QR code when page loads
document.addEventListener('DOMContentLoaded', generateQR); 