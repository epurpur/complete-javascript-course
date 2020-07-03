

/* John and his family go on vacation and went to three different restaurants. The bills
were $124, $48, and $268.

John creates a simple tip calculator (as a function). Tips should be:
If bill is < $50, tip 20%
If bill is between $50 and $200, tip 15%
If bill is > $200, tip 10%

In the end, John would like to have two arrays:
1- Containing all three tips (one for each bill)
2- Containing all three final paid amounts (bill + tip). */


// 1.
var tips = [];

var totalAmountsPaid = [];

function tipCalculator(billAmount) {
	if (billAmount < 50) {
		var tip = billAmount * .2;
		tips.push(tip);
		totalAmountsPaid.push(billAmount + tip);
	} else if (billAmount >= 50 && billAmount < 200) {
		var tip = billAmount * .15;
		tips.push(tip);
		totalAmountsPaid.push(billAmount + tip);
	} else if (billAmount >= 200) {
		tip = billAmount * .10;
		tips.push(tip);
		totalAmountsPaid.push(billAmount + tip);
	}
}



tipCalculator(48);
tipCalculator(124);
tipCalculator(268);

//console.log(tips);
//console.log(totalAmountsPaid);



/*********************
Objects and Properties
*********************/

//equivalent to python dictionaries

var john = {
	firstName: 'John',
	lastName: 'Smith',
	birthYear: 1990,
	family: ['Jane', 'Mark', 'Bob', 'Emily'],
	job: 'teacher',
	isMarried: false
};

//console.log(john);
//console.log(john.lastName);
//console.log(john['firstName']);

var x = 'birthYear';
//console.log(john[x]);

var y = john.isMarried;
//console.log(y);

//mutate values
john['job'] = 'designer';
//console.log(john['job']);




var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
//console.log(jane)


/*********************
Objects and Methods
*********************/

var erich = {
	firstName: 'Erich',
	lastName: 'Purpur',
	birthYear: 1987,
	family: ['Tom', 'Geri', 'Eileen'],
	job: 'librarian',
	isMarried: false,
	calcAge: function() {
		this.age = 2020 - this.birthYear;   //this refers to current object
	}
};

//
erich.calcAge();
//console.log(erich['age'])


/********CODING CHALLENGE 3 *********/
//var johnWeight = 68;  //in kg
//var johnHeight = 1.76; //in meters

//var markWeight = 70;
//var markHeight = 1.8;

//var johnBMI = johnWeight / (johnHeight * johnHeight);
//var markBMI = markWeight / (markHeight * markHeight);

//console.log("John's BMI = ",johnBMI)
//console.log("Mark's BMI = ",markBMI)

//var markHigherBMI = markBMI > johnBMI;
//console.log("Does Mark have a higher BMI than John? : ", markHigherBMI);

var mrJohn = {
	weight: 65,
	height: 1.75,
	calcBMI: function() {
		this.bmi = this.weight / (this.height * this.height)
	}
};

mrJohn.calcBMI()  //have to first calculate the bmi key before calling it
//console.log(mrJohn['bmi']);

var mrMark = {
	weight: 68,
	height: 1.77,
	calcBMI: function() {
		this.bmi = this.weight / (this.height**2)
	}
};

mrMark.calcBMI();
//console.log(mrMark['bmi']);


var heavier = mrJohn.bmi > mrMark.bmi;

//console.log('Does Mr John have a higher BMI than Mr Mark?: ', heavier);

/*********************
Loops and Iteration
*********************/


//for (var i = 1; i < 20; i += i) {
//	console.log(i);
//}

var sarah = ['Sarah', 'Bridge', 1987, 'doctor', false]

// for loop with if statement
for (var i = 0; i < sarah.length; i++) {
	if (i = 'Bridge') {
		console.log(i);
	}
}

for (var i = 0; i < sarah.length; i++) {
	if (typeof sarah[i] == 'string') {
		console.log(sarah[i]);
	}
}



