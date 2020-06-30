var johnWeight = 68;  //in kg
var johnHeight = 1.76; //in meters

var markWeight = 70;
var markHeight = 1.8;

var johnBMI = johnWeight / (johnHeight * johnHeight);
var markBMI = markWeight / (markHeight * markHeight);

console.log("John's BMI = ",johnBMI)
console.log("Mark's BMI = ",markBMI)

var markHigherBMI = markBMI > johnBMI;
console.log("Does Mark have a higher BMI than John? : ", markHigherBMI);



/*********************************/
/* Boolean Logic */

// look at the syntax

var age = 23;

if (age < 13) {
	console.log('John is a child');
} else if (age >= 13 && age <= 19) {    //use this instead of python :
	console.log('John is a teenager');
} else if (age >= 20) {
	console.log('John is an adult');
}

/*********************************/
/* Ternary operator and switch statements (conditionals) */

var firstName = 'John';

age >= 18 ? console.log(firstName + ' drinks beer')
: console.log(firstName + ' drinks juice');

var drink = age>= 18 ? 'beer' : 'juice';
console.log(drink);



// switch statement

var job = 'instructor';
switch (job) {
	case 'teacher':
	case 'instructor':
		console.log(firstName + ' teaches kids how to code');
		break;
	case 'driver':
		console.log(firstName + ' drives an uber in Lisbon');
		break;
	case 'designer':
		console.log(firstName + ' designs beautiful websites');
		break;
	default:
		console.log(firstName + ' has a different job');
}


age = 11

switch (true) {
	case age < 13:
		console.log(firstName + ' is a boy');
		break;
	case age >= 13 && age < 20: 
		console.log(firstName + ' is a teenager');
		break;
	default:
		console.log(firstName + ' is a man');
}


/*********************************/
/* Truthy and Falsy values */

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

var height = '';

if (height) {
	console.log('Variable is defined')
} else {
	console.log('Variable is not defined');
}

//define zero value

if (height || height === '') {
	console.log('Variable is defined');
} else {
	console.log('Variable is not defined');
}

height = 23
// Equality operator
if (height == '23') {
	console.log('The == operator does type coersion');
}

console.log('')

/*********************************/
/* Coding Challenge 2 */

var johnTeamAverage = (89 + 120 + 103) / 3;
var mikeTeamAverage = (116 + 94 + 123) / 3;
var maryTeamAverage = (97 + 135 + 105) / 3;

console.log('John Team Average: ', johnTeamAverage);
console.log('Mike Team Average: ', mikeTeamAverage);
console.log('Mary Team Average: ', maryTeamAverage);


if (johnTeamAverage > mikeTeamAverage) {
	console.log("John's team is better");
} else {
	console.log("Mike's team is better");
}


switch (true) {
	case johnTeamAverage > mikeTeamAverage && johnTeamAverage > maryTeamAverage:
		console.log("John's team is better");
		break;
	case mikeTeamAverage > johnTeamAverage && mikeTeamAverage > maryTeamAverage:
		console.log("Mike's team is better");
		break;
	default:
		console.log("Mary's team is better");
}






