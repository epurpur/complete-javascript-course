/*
// Function Constructor

//object literal
var john = {
	name: 'John',
	yearOfBirth: 1990,
	job: 'teacher'
};


//blueprint for person object using function constructor
var Person = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
}


//prototype of Person constructor
Person.prototype.calculateAge =
function() {
	console.log(2020 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';


//create new object using constructor function. Called Instantiation
//objects are instances of the constructor object
var erich = new Person('Erich', 1987, 'librarian');
var jane = new Person('Jane', 1989, 'designer');
var mark = new Person('Mark', 1948, 'retired');

erich.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(erich.lastName);
*/



/*
// Object.create method
var personProto = {
	calculateAge: function() {
		console.log(2020 - this.yearOfBirth);
	}
};

var john = Object.create(personProto);  //empty object
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';


var jane = Object.create(personProto, 
{
	name: { value: 'Jane' },
	yearOfBirth: { value: 1969 },
	job: { value: 'designer' }
});
*/


/*
//Primitives vs Objects

//functions
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

//objects
var obj1 = {
	name: 'John',
	age: 26
};

var obj2 = obj1;  //points to same obj1 object in memory

obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);

//functions
var age = 27;
var obj = {
	name: 'Jonas',
	city: 'Lisbon',
};

function change(a, b) {
	a = 30;                 //this does not change age of var obj
	b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);
*/


/*
// First class functions

var years = [1990, 1935, 1967, 2005, 1998];

function arrayCalc(array, fn) {
	//loop over array and return result
	var arrResult = [];
	for (var i = 0; i < array.length;
	i++) {
		arrResult.push(fn(array[i]));
	}
	return arrResult;
}


function calculateAge(element) {
	//receives element argument and returns age based on element
	return 2020 - element;
}


function isFullAge(element) {
	//evaluate if element >= 18
	return element >= 18;
}


function maxHeartRate(element) {
	if (element >= 18 && element <= 81) {
		return Math.round(206.9 - (0.67 * element));
	} else {
		return -1;
	}
}


console.log(arrayCalc(years, calculateAge));

var ages = arrayCalc(years, calculateAge);
console.log(ages);

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);

var heartRates = arrayCalc(ages, maxHeartRate);
console.log(heartRates);
*/



/*
//functions returning functions

function interviewQuestion(job) {
	if (job === 'designer') {
		return function(name) {    //anonymous function
			console.log(name + ', can you explain what UX design is?');
		}
	} else if (job === 'teacher') {  //anonymous function
		return function(name) {
			console.log('What subject do you teach, ' + name + '?');
		}
	} else {
		return function(name) {    //anonymous function
			console.log('Hello ' + name + ', what do you do?');
		}
	}
}


var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('John');

var designerQuestion = interviewQuestion('designer');
designerQuestion('Jane');

var otherQuestion = interviewQuestion('lawyer');
otherQuestion('Erich');

interviewQuestion('doctor')('Sarah');
*/



/*
//Immediate Invoked Function Expressions (IIFE)

//normal function
function game () {
	var score = Math.random() * 10;
	console.log(score >= 5);
}
//game();

//IIFE example. wrap entire thing in parenthesis. 
(function () {
	var score = Math.random() * 10;
	console.log(score >= 5);
})();


(function (goodLuck) {
	var score = Math.random() * 10;
	console.log(score >= 5 - goodLuck);
})(5);
*/


/*
//Closures

function retirement(retirementAge) {
	var a = ' years left until retirement';
	return function(yearOfBirth) {
		var age = 2020 - yearOfBirth;
		console.log((retirementAge - age) + a);
	}
}


var retirementUS = retirement(66);
//retirementUS(1987);

var retirementGermany = retirement(65);
//retirementGermany(1987);

var retirementIceland = retirement(67);
//retirementIceland(1987);


function interviewQuestion(job) {
	return function(name) {
		if (job === 'designer') {
			console.log(name + ', can you please explain what UX design is?');
		} else if (job === 'teacher') {
			console.log('What subject do you teach, ' + name + '?');
		} else {
			console.log('Hello ' + name + ', what do you do?');
		}
	}
}

interviewQuestion('teacher')('Erich')

var designer = interviewQuestion('designer')
designer('Mary')

interviewQuestion('scientist')('Kevin')
*/



//bind, call, apply methods on functions
var john = {
	name: 'John',
	age: 27,
	job: 'teacher',
	presentation: function(style, timeOfDay) {
		if (style === 'formal') {
			console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
		} else if (style === 'friendly') {
			console.log('Hey! What\'s up? I\'m ' + this.name + ' I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay);
		}
	}
}


var emily = {
	name: 'Emily',
	age: 35,
	job: 'designer'
};

john.presentation('formal', 'morning')

//can we use presentation method for emily object?  We can use call() method to do this
john.presentation.call(emily, 'friendly', 'afternoon')

//apply method. package arguments as an array
//john.presentation.apply(emily, ['friendly', 'night'])

//bind method, presets attributes
var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('mid morning');








