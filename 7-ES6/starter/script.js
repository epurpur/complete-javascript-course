// Lecture: Let and const


//ES5
/*
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

//ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);



//ES5
function driversLicense5(passedTest) {

	if (passedTest) {
		var firstName = 'John';
		var yearOfBirth = 1990;
	}
	console.log(firstName + ', born in ' + yearOfBirth + ', can now drive a car.');

}

driversLicense5(true);


//ES6

function driversLicense6(passedTest) {

	let firstName;
	const yearOfBirth = 1990;

	if (passedTest) {
		firstName = 'John';      //variable only available in this block if defined here	}
	console.log(firstName + ', born in ' + yearOfBirth + ', can now drive a car.');
	}
}

driversLicense6(true);


//function scoped variables
/*
let i = 23;
for (let i = 0; i < 5; i++) {
	console.log(i);
}

console.log(i);



//block scoped variables
var i = 23;

for (var i = 0; i < 5; i++) {
	console.log(i);
}

console.log(i);
*/





//Blocks and IIFEs
/*
{
	const a = 1;
	let b = 2;
}

console.log(a + b);
*/





// Strings in ES6

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcage(year) {
	return 2020 - year;
}















