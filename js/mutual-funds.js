function calculateMutualFund() {

    let investment = parseFloat(
        document.getElementById("investment").value
    );

    let rate = parseFloat(
        document.getElementById("rate").value
    );

    let years = parseFloat(
        document.getElementById("years").value
    );

    if (
        isNaN(investment) ||
        isNaN(rate) ||
        isNaN(years)
    ) {
        alert("Please fill all fields");
        return;
    }

    let monthlyRate = math.divide(rate, 12 * 100);

    let months = math.multiply(years, 12);

    let futureValue = math.multiply(investment, math.divide(math.subtract(math.pow(math.add(1, monthlyRate), months), 1), monthlyRate ), math.add(1, monthlyRate));

    let investedAmount = math.multiply( investment, months);

    let estimatedReturn = math.subtract(futureValue, investedAmount);

    document.getElementById("investedAmount").innerText = "₹" + math.round(investedAmount).toLocaleString('en-IN');
    document.getElementById("estimatedReturn").innerText = "₹" + math.round(estimatedReturn).toLocaleString('en-IN');
    document.getElementById("totalValue").innerText = "₹" + math.round(futureValue).toLocaleString('en-IN');
}