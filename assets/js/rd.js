function calculateRD() {

    let investment = parseFloat(document.getElementById("investment").value);

    let rate = parseFloat(document.getElementById("rate").value);

    let years = parseFloat(document.getElementById("years").value);

    if (
        isNaN(investment) ||
        isNaN(rate) ||
        isNaN(years)
    ) {
        alert("Please fill all fields");
        return;
    }

    let months = math.multiply(years, 12);

    let quarterlyRate = math.divide(rate, 4 * 100);

    let maturityAmount = math.multiply(investment, math.divide(
                math.subtract(
                    math.pow(
                        math.add(1, quarterlyRate),
                        math.multiply(4, years)
                    ),
                    1
                ),
                math.subtract(1, math.pow(
                        math.add(1, quarterlyRate), -1 / 3
                    )
                )
            )
        );

    let investedAmount =math.multiply(investment, months);

    let estimatedReturns =math.subtract(maturityAmount, investedAmount);

    document.getElementById("investedAmount").innerText = "₹" + math.round(investedAmount).toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2});

    document.getElementById("estimatedReturns").innerText = "₹" + math.round(estimatedReturns).toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2});

    document.getElementById("totalValue").innerText = "₹" + math.round(maturityAmount).toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2});
}