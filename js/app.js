//function to change an image src attribute
function changeImage() {
    document.getElementById('img').src = 'images/img1.jpg';
    document.getElementById('img').alt = 'A new horizon';
    document.getElementById('img').title = 'A new horizon';
}

/*
Hmmm this project that
you are about to take on
would either paralyze you 
or kill you patapata
*/
function changeText(){
    console.log("This is a test write");
}


//Calculator
const num1_input = document.getElementById('num1');
const num2_input = document.getElementById('num2');
const result_field = document.getElementById('result');

function add(num1, num2) {
    let result = num1 + num2;
    return result;
}

function subtract(num1, num2) {
    let result = num1 - num2;
    return result;
}

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

function divide(num1, num2) {
    let result = num1 / num2;
    return result;
}

function modulus(num1, num2) {
    let result = num1 % num2;
    return result;
}

function getNum1() {
	return parseFloat(num1_input.value);
}

function getNum2() {

	return parseFloat(num2_input.value);
}
 
function addClick() {

	let x = getNum1();

	let y = getNum2();

	let result = add(x, y);

	result_field.value = result;
}

function subClick() {

	let x = getNum1();

	let y = getNum2();

	let result = subtract(x, y);

	result_field.value = result;
}

function mulClick() {

	let x = getNum1();

	let y = getNum2();

	let result = multiply(x, y);

	result_field.value = result;
}

function divClick() {

	let x = getNum1();

	let y = getNum2();

	let result = divide(x, y);

	result_field.value = result;
}

function modClick() {

	let x = getNum1();

	let y = getNum2();

	let result = modulus(x, y);

	result_field.value = result;
}