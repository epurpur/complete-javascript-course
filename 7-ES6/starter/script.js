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

Array.from(all).forEach(cur => cur.style.color = 'purple');








