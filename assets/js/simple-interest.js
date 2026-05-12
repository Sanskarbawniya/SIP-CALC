function calculateSimpleInterest() {

  const principal = parseFloat(document.getElementById('principal').value);
  const rate = parseFloat(document.getElementById('interestRate').value);
  const time = parseFloat(document.getElementById('time').value);

    if (
        isNaN(principal) ||
        isNaN(rate) ||
        isNaN(time)
       ) {
        alert('Please enter valid numbers for principal, rate, and time.');
        return;
    }

  const interest = (principal * rate * time) / 100;
  const totalAmount = principal + interest;
  

    document.getElementById('simpleInterest').innerText = "₹" + interest.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2});
    document.getElementById('principalAmount').innerText = "₹" + principal.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2});
    document.getElementById('totalAmount').innerText = "₹" + totalAmount.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2});
}
