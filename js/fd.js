function calculateFD() {

    let principal = parseFloat(document.getElementById("principal").value);

    let rate = parseFloat(document.getElementById("rate").value);

    let years = parseFloat(document.getElementById("years").value);

    if (
        isNaN(principal) ||
        isNaN(rate) ||
        isNaN(years)
    ) {
        alert("Please fill all fields");
        return;
    }

    let n = 4;

    let ratePerQuarter = math.divide(rate, n * 100);

    let totalQuarter = math.multiply(n, years);

    let maturityAmount = math.multiply(principal,
        math.pow(
            math.add(1,ratePerQuarter),totalQuarter
        )
    );

    let estimatedReturns = math.subtract(maturityAmount, principal);

    document.getElementById( "investedAmount").innerText = "₹" + math.round(principal).toLocaleString('en-IN');
    document.getElementById( "estimatedReturns").innerText = "₹" + math.round(estimatedReturns).toLocaleString('en-IN');
    document.getElementById( "totalValue").innerText = "₹" + math.round(maturityAmount).toLocaleString('en-IN');





        
}