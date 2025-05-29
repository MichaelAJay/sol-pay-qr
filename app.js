import { createQR } from '@solana/pay';

// Static Solana Pay URL - replace this with your actual payment URL
const SOLANA_PAY_URL = 'solana:42ffzGdfamWaFob8D6vL3dEx61HzV6ptw2cqwFFKmWjZ?amount=0.011686&memo=3mvim8xDqbAgGn2B6af6aBV8ZHuR8HQRhz2qVQpwXaMwNkJ6DiAadiWUozc1';

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