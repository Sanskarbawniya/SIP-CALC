function calculateLumpsum() {

    let principal = parseFloat(document.getElementById("principal").value);
    let rate = parseFloat(document.getElementById("rate").value);
    let years = parseFloat(document.getElementById("years").value);

    if(
        isNaN(principal) ||
        isNaN(rate) ||
        isNaN(years)
    ){
        alert("Please fill all fields");
        return;
    }

    let annualRate = math.divide(rate, 100);

    let totalValue = math.multiply(principal,math.pow(math.add(1, annualRate), years));

    let estimatedReturn =math.subtract(totalValue, principal);

    document.getElementById("investedAmount").innerText = "₹" + math.round(principal).toLocaleString('en-IN');
    document.getElementById("estimatedReturn").innerText = "₹" + math.round(estimatedReturn).toLocaleString('en-IN');
    document.getElementById("totalValue").innerText = "₹" + math.round(totalValue).toLocaleString('en-IN');
}