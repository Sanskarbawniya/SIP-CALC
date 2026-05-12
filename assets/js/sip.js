function calculateSIP(){

  let investment = parseFloat(document.getElementById("investment").value);

  let rate = parseFloat(document.getElementById("rate").value);

  let years = parseFloat(document.getElementById("years").value);

  let monthlyRate = rate / 12 / 100;

  let months = years * 12;

  let futureValue = investment *(
    (
      Math.pow(1 + monthlyRate, months) - 1
    ) / monthlyRate
  ) *
  (1 + monthlyRate);

  let investedAmount = investment * months;

  let estimatedReturn = futureValue - investedAmount;

  document.getElementById("investedAmount").innerText = "₹" + investedAmount.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2});

  document.getElementById("estimatedReturn").innerText = "₹" + estimatedReturn.toLocaleString('en-IN' , {minimumFractionDigits: 2, maximumFractionDigits: 2});

  document.getElementById("totalValue").innerText = "₹" + futureValue.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2});
}






