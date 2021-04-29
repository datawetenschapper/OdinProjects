function add(...number) {
	return (number[0] + number[1])
}

function subtract(...number) {
	return (number[0] - number[1]);
}

function sum(number) {
	let start = 0;
	for (var i in number) { start += parseFloat(number[i]); }
	return start
}

function multiply(number) {

	let start = 1;
	for (var i in number) { start *= parseFloat(number[i]); }
	return start
}

function power(...number) {
	return (number[0] ** number[1]);
}

function factorial(number) {
	if (number > 1){
		for (let result = number -1; result>= 1; result--){
			number *= result;
		}
	}
	else{number=1}
	return number
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial
}