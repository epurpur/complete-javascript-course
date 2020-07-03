/************************
******FUNCTIONS**********
************************/

function calculateAge(birthYear) {
	//function block
	return 2020 - birthYear;
}

var ageJohn = calculateAge(1987);
var ageMike = calculateAge(1955);
var ageJane = calculateAge(1954);

//console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
	var age = calculateAge(year); 
	var retirement = 65 - age;

	if (retirement > 0) {
		console.log(firstName + ' retires in ' + retirement + ' years');
	} else {
		console.log(firstName + ' is already retired')
	}
}

//yearsUntilRetirement(1987, 'John');
//yearsUntilRetirement(1969, 'Jane');
//yearsUntilRetirement(1954, 'Tom');



/************************
FUNCTION Statements and Expressions
************************/


// Function declaration
//function whatDoYouDo(job, firstName){
//	pass
//}


// Function expression
var whatDoYouDo = function(job, firstName) {
	switch(job) {
		case 'teacher':
			return firstName + ' teaches kids how to code';
		case 'driver':
			return firstName + ' drives an Uber';
		case 'designer':
			return firstName + ' beautiful websites';
		default:
			return firstName + ' has another job';
	}
}

//console.log(whatDoYouDo('teacher', 'John'));
//console.log(whatDoYouDo('driver', 'Dave'));
//console.log(whatDoYouDo('designer', 'Susan'));
//console.log(whatDoYouDo('doctor', 'Sarah'));




/************************
Javascript Arrays
************************/

var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

//console.log(names);
//console.log(names[0]);

names[1] = 'Ben';
//console.log(names);

names[names.length] = 'Mary';   // one way to add item to javascript array
//console.log(names);



var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue')  // adds item to end of array
console.log(john);

john.unshift('Mr. ')  // adds item to beginning of array
console.log(john);

john.pop(); // removes item from end of array
console.log(john);

john.shift(); // removes item from beginning of array
console.log(john);

console.log(john.indexOf(1990));  // returns index of this item in the array






