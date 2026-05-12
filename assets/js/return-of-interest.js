function calculateROI() {

    let investment = parseFloat(
        document.getElementById("investment").value
    );

    let finalValue = parseFloat(
        document.getElementById("finalValue").value
    );

    if (
        isNaN(investment) ||
        isNaN(finalValue) ||
        investment <= 0 ||
        finalValue <= 0
    ) {
        alert("Please fill all fields");
        return;
    }

    let netProfit = math.subtract(finalValue, investment);
    let roi = math.multiply(math.divide(netProfit, investment), 100);
    let annualROI = math.divide(roi, document.getElementById("years").value || 1);

    document.getElementById("netProfit").innerText = "₹" + math.round(netProfit).toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2});
    document.getElementById("roiResult").innerText = math.round(roi).toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "%";
    document.getElementById("annualROI").innerText = math.round(annualROI).toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "% per year";
}