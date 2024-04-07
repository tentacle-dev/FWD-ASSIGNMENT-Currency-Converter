document.getElementById('convertButton').addEventListener('click', convertCurrency);

function convertCurrency() {
    const usdInput = document.getElementById('usd').value;
    const cadInput = document.getElementById('cad').value;

    if (usdInput && isNaN(usdInput)) {
        alert("Please enter a valid numeric value for USD amount.");
        return;
    }

    if (cadInput && isNaN(cadInput)) {
        alert("Please enter a valid numeric value for CAD amount.");
        return;
    }

    // Conversion rates (example rates, you can replace them with real rates)
    const usdToCadRate = 1.25; // 1 USD = 1.25 CAD
    const cadToUsdRate = 0.8; // 1 CAD = 0.8 USD

    if (usdInput && !cadInput) {
        const usdAmount = parseFloat(usdInput);
        const convertedCadAmount = usdAmount * usdToCadRate;
        document.getElementById('result').textContent = "Converted USD to CAD: " + convertedCadAmount.toFixed(3);
    } else if (!usdInput && cadInput) {
        const cadAmount = parseFloat(cadInput);
        const convertedUsdAmount = cadAmount * cadToUsdRate;
        document.getElementById('result').textContent = "Converted CAD to USD: " + convertedUsdAmount.toFixed(3);
    } else if (usdInput && cadInput) {
        const usdAmount = parseFloat(usdInput);
        const cadAmount = parseFloat(cadInput);
        const convertedCadAmount = usdAmount * usdToCadRate;
        const convertedUsdAmount = cadAmount * cadToUsdRate;
        document.getElementById('result').textContent = "Converted USD to CAD: " + convertedCadAmount.toFixed(3) + " | Converted CAD to USD: " + convertedUsdAmount.toFixed(3);
    } else {
        // I have noticed even if the input is number, e can be entered, i figured it in one of my projects
        alert("Please enter a valid numeric value for at least one of the currency amounts.");
        return;
    }
}
