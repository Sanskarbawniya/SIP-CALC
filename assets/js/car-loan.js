let loanAmount, interestRate, years;

function calculateCarLoan() {

    loanAmount = parseFloat(
        document.getElementById("loanAmount").value
    );
    interestRate = parseFloat(
        document.getElementById("interestRate").value
    );
    years = parseFloat(
        document.getElementById("years").value
    );
    if (
        isNaN(loanAmount) ||
        isNaN(interestRate) ||
        isNaN(years)
    ) {
        alert("Please fill all fields");
        return;
    }   
    let monthlyInterestRate = math.divide(interestRate, 12 * 100);

    let numberOfPayments = math.multiply(years, 12);
    let emi = math.multiply(loanAmount, math.divide(math.multiply(monthlyInterestRate, math.pow(math.add(1, monthlyInterestRate), numberOfPayments)), math.subtract(math.pow(math.add(1, monthlyInterestRate), numberOfPayments), 1)));

    let totalPayment = math.multiply(emi, numberOfPayments);
    let totalInterest = math.subtract(totalPayment, loanAmount);
    document.getElementById("EMI").innerText = "₹" + math.round(emi).toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2});
    document.getElementById("principal").innerText = "₹" + math.round(loanAmount).toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2});
    document.getElementById("totalPayment").innerText = "₹" + math.round(totalPayment).toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2});
    document.getElementById("totalInterest").innerText = "₹" + math.round(totalInterest).toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2});


}