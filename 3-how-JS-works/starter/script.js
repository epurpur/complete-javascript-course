///////////////////////////////////////
// Lecture: Hoisting

/*
calculateAge(1965);   //this is stored before code is executed. Don't have to first declare function before using

function calculateAge(year) {
    console.log(2016 - year);
}

calculateAge(1999);


//retirement(1956);    // this function is not yet hoisted

var retirement  = function(year) {
    console.log(65 - (2016-year));
}

retirement(1990);

console.log(age);
var age = 23;

function foo() {
    var age = 65;
    console.log(age);
}

foo();
console.log(age);
*/




///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword


//console.log(this);  //points to window object (global)

/*
function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);     //points to window object (global)
}

calculateAge(1985);
*/

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2020 - this.yearOfBirth);

        /*
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
        */
    }
}

john.calculateAge();


var mike = {
    name: 'Mike',
    yearOfBirth: 1984
}

mike.calculateAge = john.calculateAge;   //treat the function like a variable

mike.calculateAge();




