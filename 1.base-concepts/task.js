"use strict";

function solveEquation(a, b, c) {
	let arr = [];
	let d = b ** 2 - 4 * a * c;
	if (d < 0) {
		return arr;
	} else if (d === 0) {
		arr.push(-b / (2 * a));
		return arr;
	} else {
		arr.push((-b + Math.sqrt(d)) / (2 * a));
		arr.push((-b - Math.sqrt(d)) / (2 * a));
		return arr;
	}
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	if (typeof percent === 'number' && typeof contribution === 'number' && typeof amount === 'number' && typeof countMonths === 'number') {
		let bodyCredit = amount - contribution;
		let monthlyPercent = percent / 100 / 12;
		let monthlyPayment = bodyCredit * (monthlyPercent + monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1));
		let totalAmount = parseFloat((monthlyPayment * countMonths).toFixed(2));
		return totalAmount;
	} else {
		return false;
	}
}