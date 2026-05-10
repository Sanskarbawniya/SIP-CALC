function calculateHomeLoan() {
    const principal = parseFloat(document.getElementById('loanAmount').value);
    const annualRate = parseFloat(document.getElementById('interestRate').value);
    const duration = parseFloat(document.getElementById('duration').value);

    if (
        isNaN(principal) || principal <= 0 ||
        isNaN(annualRate) || annualRate <= 0 ||
        isNaN(duration) || duration <= 0
    ) {
        alert('Please enter valid numbers for all fields.');
        return;
    }       
    const monthlyRate = annualRate / 12 / 100;
    const totalPayments = duration * 12;
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / (Math.pow(1 + monthlyRate, totalPayments) - 1);
    const totalPayment = emi * totalPayments;
    const totalInterest = totalPayment - principal;
    document.getElementById('emi').innerText = '₹' + emi.toLocaleString('en-IN');
    document.getElementById('totalInterest').innerText = '₹' + totalInterest.toLocaleString('en-IN');
    document.getElementById('totalAmount').innerText = '₹' + totalPayment.toLocaleString('en-IN');
document.getElementById('principalAmount').innerText = '₹' + principal.toLocaleString('en-IN');

}