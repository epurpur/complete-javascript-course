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




/*
// Strings in ES6

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcage(year) {
	return 2020 - year;
}


//template literals
//ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcage(yearOfBirth) + ' years old');

//ES6  Using backticks ``. Equivalent to f strings in python
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcage(yearOfBirth)} years old.`)

const n = `${firstName + lastName}`;
console.log(n.startsWith('J'));
console.log(n.startsWith('j'));
console.log(n.endsWith('th'));
console.log(n.includes('John'));
console.log(firstName.repeat(5));
console.log(`${firstName} `.repeat(5));
*/





/*
// Arrow Functions

const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(el) {
	return 2020 - el;
});
console.log(ages5);

// ES6 arrow function. Operates same as above.
let ages6 = years.map(el => 2020 - el);
console.log(ages6);


ages6 = years.map((el, index) => `Age element ${index + 1}: ${2020 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
	const now = new Date().getFullYear();
	const age = now - el;
	return `Age element ${index + 1}: ${age}.`
});
console.log(ages6);


// Arrow Functions 2 // lexical this variable

// ES5 
var box5 = {
	color: 'green',
	position: 1,
	clickMe: function() {

		var self = this;

		document.querySelector('.green').addEventListener('click', function() {
			var str = 'This is box number ' + self.position + ' and it is ' + self.color;
			alert(str);
		});
	}
}
//box5.clickMe();


// ES6
const box6 = {
	color: 'green',
	position: 1,
	clickMe: function() {

		document.querySelector('.green').addEventListener('click', () => {
			var str = 'This is box number ' + this.position + ' and it is ' + this.color;
			alert(str);
		});
	}
}
//box6.clickMe();

/*
const box66 = {
	color: 'green',
	position: 1,
	clickMe: () => {

		document.querySelector('.green').addEventListener('click', () => {
			var str = 'This is box number ' + this.position + ' and it is ' + this.color;
			alert(str);
		});
	}
}
box66.clickMe();


function Person(name) {
	this.name = name;
}

//ES5
Person.prototype.myFriends5 = function(friends) {

	var arr = friends.map(function(el) {
		return this.name + ' is friends with ' + el;
	}.bind(this));
	console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);


// ES6
Person.prototype.myFriends6 = function(friends) {

	var arr = friends.map(el => `${this.name} is friends with ${el}`);

	console.log(arr);
}

new Person('Erich').myFriends6(friends);
*/


/*
// Destructuring

// ES5
var john = ['John', 26]
//var name = john[0];
//var age = john[1];


//ES6  take apart data structure quickly
const [name, age] = ['John', 26];   // creates constant called name and constant called year
console.log(name);
console.log(age);


const myObject = {
	firstName: 'John',
	lastName: 'Smith'
};

const {firstName, lastName} = myObject;
console.log(firstName, lastName);


const {firstName: a, lastName: b} = myObject;
console.log(a);
console.log(b);



function calcAgeRetirement(year) {
	const age = new Date().getFullYear() - year;

	return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);
*/



/*
// Arrays

const boxes = document.querySelectorAll('.box');   //returns a node list of box classes

// ES5

var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
	cur.style.backgroundColor = 'dodgerblue'
});


//ES6
const boxesArr6 = Array.from(boxes);   //transforms nodelist to array
//boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

// Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');


// ES5
for (var i = 0; i < boxesArr5.lenth; i++) {

	if (boxesArr5[i].className === 'box blue') {
		continue;  //skips iteration of loop and goes to next iteration
	}

	boxesArr5[i].textContent = 'I changed to blue';

}


// ES6 for of loop    //much more like for loop in python
for (const cur of boxesArr6) {
	if (cur.className === 'box blue') {
		continue;
	}
	cur.textContent = 'I changed to blue';
}


// ES5 
var ages = [12, 17, 8, 21, 14, 11]

var full = ages.map(function(cur) {
	return cur > 18;
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));
*/



/*
// Spread operator

function addFourAges (a, b, c, d) {
	return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

// ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);   //apply function receives an array
console.log(sum2);


//ES6
const sum3 = addFourAges(...ages);  // ... = spread operator. Expands the array
console.log(sum3);


const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];

const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily);

//log each member of family
for (var person of bigFamily) {
	console.log(person);
} 

// spread on node list
const h = document.querySelector('h1');    //not a class or id. just an h1 element
const boxes = document.querySelectorAll('.box');

const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');  //color is the css style for text color
*/




// Rest Parameters   Opposite of Spread operator

/*
// ES5
function isFullAge5() {
	console.log(arguments);   //arguments is special variable
	var argsArr = Array.prototype.slice.call(arguments);

	argsArr.forEach(function(cur) {
		console.log((2020 - cur) >= 18);
	});
}

//isFullAge5(1990, 1999, 1965, 2015, 1987);

// ES6
function isFullAge6(...years) {  //as soon as we call function, argument is transformed into array and pass into function
	years.forEach(cur => console.log((2020 - cur) >= 18));
}  

isFullAge6(1990, 1992, 1987, 1985, 1999);
*/

/*
function isFullAge5(limit) {
	console.log(arguments);   //arguments is special variable
	var argsArr = Array.prototype.slice.call(arguments, 1);  //starts to cut array at position 1
	console.log(argsArr);

	argsArr.forEach(function(cur) {
		console.log((2020 - cur) >= 18);
	});
}

//isFullAge5(21, 1990, 1999, 1965, 2015, 1987);

// ES6
function isFullAge6(limit, ...years) {  //as soon as we call function, argument is transformed into array and pass into function
	years.forEach(cur => console.log((2020 - cur) >= 18));
}  

isFullAge6(16, 1945, 1990, 1992, 1987, 1985, 1999);
*/



/*
// Default Parameters

// ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
	
	lastName === undefined ? lastName = 'Smith' : lastName = lastName;
	nationality === undefined ? nationality = 'american' : nationality = nationality;

	this.firstName = firstName;
	this.lastName = lastName;
	this.yearOfBirth = yearOfBirth;
	this.nationality = nationality;
}

// ES6

function SmithPerson(firstName, yearOfBirth, lastName='Smith', nationality='American') {

	this.firstName = firstName;
	this.lastName = lastName;
	this.yearOfBirth = yearOfBirth;
	this.nationality = nationality;
}


var john = new SmithPerson('John', 1990);   //we can call function without specifying all arguments. 'undefined' is assigned to missing parameters
var emily = new SmithPerson('Emily', 1988, 'Rodriguez', 'spanish');
*/



/*
//Maps  Entirely new in ES6

const question = new Map();
question.set('question', 'What is the official name of the latest major JavaScript version?')  //works like a property in an object
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer')
question.set(false, 'Wrong answer')

console.log(question.get('question'));
console.log(question.size);

if (question.has(4)) {
	//question.delete(4);
	console.log('Answer 4 is here');
}

//question.clear();

//question.forEach((value, key) => console.log(`This is ${key} and its set to ${value}`));


for (let [key, value] of question.entries()) {
	if (typeof(key) === 'number') {
		console.log(`Answer ${key}:${value}`);
	}
};


const ans = parseInt(prompt('Write the correct answer'));

console.log(question.get(ans === question.get('correct')));
*/



/*
// Classes  (better way to do function constructor)

// ES5
var Person5 = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
}

Person5.prototype.calculateAge = function() {
	var age = new Date().getFullYear() - this.yearOfBirth;
	console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');


// ES6      More similar syntax to python classes
class Person6 {      
	constructor (name, yearOfBirth, job) {
		this.name = name;
		this.yearOfBirth = yearOfBirth;
		this.job = job;
	}

	calculateAge() {
		var age = new Date().getFullYear() - this.yearOfBirth;
		console.log(age);
		
	}

	static greeting() {
		console.log('Hey There!')
	}

	testing() {
		console.log(this.name);
	}

}

const john6 = new Person6('John', 1990, 'teacher');
*/


// Classes and Subclasses

// ES5
var Person5 = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
}

Person5.prototype.calculateAge = function() {
	var age = new Date().getFullYear() - this.yearOfBirth;
	console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {

	Person5.call(this, name, yearOfBirth, job);
	this.olympicGames = olympicGames;
	this.medals = medals;

}


Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function() {
	this.medals ++ ;
	console.log(this.medals);
}

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);


// ES6
class Person6 {      
	constructor (name, yearOfBirth, job) {
		this.name = name;
		this.yearOfBirth = yearOfBirth;
		this.job = job;
	}

	calculateAge() {
		var age = new Date().getFullYear() - this.yearOfBirth;
		console.log(age);
		
	}
}


class Athlete6 extends Person6 {
	constructor(name, yearOfBirth, job, olympicGames, medals) {
		super(name, yearOfBirth, job);
		this.olympicGames = olympicGames;
		this.medals = medals;
	}

	wonMedal() {
		this.medals ++;
		console.log(this.medals);
	}

}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);

johnAthlete6.wonMedal();
johnAthlete6.calculateAge();



