/* 
API Link:
https://api.exchangerate-api.com/v4/latest/usd */

// Get elements by ID
const from_currency = document.getElementById('from_currency');
const from_ammount = document.getElementById('from_ammount');
const to_currency = document.getElementById('to_currency');
const to_ammount = document.getElementById('to_ammount');
const rate = document.getElementById('rate');
const exchange = document.getElementById('exchange');

// add event listener
from_currency.addEventListener('change', calculate);
from_ammount.addEventListener('input', calculate);
to_currency.addEventListener('change', calculate);
to_ammount.addEventListener('input', calculate);

// add click event
exchange.addEventListener('click', (e) => {
    e.preventDefault();
	const data = from_currency.value;
	from_currency.value = to_currency.value;
	to_currency.value = data;
	calculate();
});

const apiUrl = "https://api.exchangerate-api.com/v4/latest/";

// create the function 
function calculate() {
	const from_currency1 = from_currency.value;
	const to_currency1 = to_currency.value;
	
	fetch(`${apiUrl}${from_currency1}`)
		.then(res => res.json())
		.then(res => {
		const rates = res.rates[to_currency1];
		rate.innerText = `1 ${from_currency1} = ${rates} ${to_currency1}`
		to_ammount.value = (from_ammount.value * rates).toLocaleString();
	})
}
 
calculate();



