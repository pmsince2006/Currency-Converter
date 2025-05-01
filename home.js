// Fetch currency list and populate dropdowns
fetch('https://api.frankfurter.app/currencies')
  .then(res => res.json())
  .then(currencies => {
    const fromSelect = document.getElementById('from-currency');
    const toSelect = document.getElementById('to-currency');

    for (const [code, name] of Object.entries(currencies)) {
      const option1 = new Option(`${code} - ${name}`, code);
      const option2 = new Option(`${code} - ${name}`, code);
      fromSelect.add(option1);
      toSelect.add(option2);
    }

    // Default selections
    fromSelect.value = 'USD';
    toSelect.value = 'INR';
  });

// Convert function
function convertCurrency() {
  const amount = document.getElementById('amount').value.trim();
  const from = document.getElementById('from-currency').value;
  const to = document.getElementById('to-currency').value;

  if (!amount || isNaN(amount) || amount <= 0) {
    document.getElementById('result').innerText = 'Please enter a valid amount.';
    return;
  }

  if (from === to) {
    document.getElementById('result').innerText = `${amount} ${from} = ${amount} ${to}`;
    return;
  }

  document.getElementById('result').innerText = 'Converting...';

  fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`)
    .then(res => res.json())
    .then(data => {
      const rate = data.rates[to];
      document.getElementById('result').innerText =
        `${amount} ${from} = ${rate.toFixed(2)} ${to}`;
    })
    .catch(() => {
      document.getElementById('result').innerText = 'Error fetching exchange rate.';
    });
}
