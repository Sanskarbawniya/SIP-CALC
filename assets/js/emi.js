function calculateEMI(){

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

    let monthlyRate = rate / 12 / 100;

    let months = years * 12;

    let emi = principal * monthlyRate * Math.pow(1 + monthlyRate, months) / ( Math.pow(1 + monthlyRate, months) - 1 );

    let totalPayment = emi * months;

    let totalInterest = totalPayment - principal;

    document.getElementById("monthlyEMI").innerText = "₹" + emi.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2});
    document.getElementById("totalInterest").innerText = "₹" + totalInterest.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2});
    document.getElementById("totalPayment").innerText = "₹" + totalPayment.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2});
}