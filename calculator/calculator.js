function add (a,b) {
	return a+b
}

function subtract (a,b) {
	return a-b
}

function sum (a) {
	/*var sum = 0;
	for (var x=0; x<a.length; x++) {
		sum += a[x];
	}
	return sum */
	return a.reduce((x, y) => x + y, 0)
}

function multiply (a) {
	return a.reduce((c, b) => c * b, 1);
}

function power(a, b) {
	return a ** b;	
}

function factorial(a) {
	var factorL = 1
	for (var x = 1; x <= a; x++) {
		factorL *= x;
	}
	return factorL;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}