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
  

    document.getElementById('simpleInterest').innerText = "₹" + interest.toFixed(2).toLocaleString('en-IN');
    document.getElementById('principalAmount').innerText = "₹" + principal.toFixed(2).toLocaleString('en-IN');
    document.getElementById('totalAmount').innerText = "₹" + totalAmount.toFixed(2).toLocaleString('en-IN');
}
