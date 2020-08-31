

//START AT VIDEO 82 15:36 timestamp


//BUDGET CONTROLLER
var budgetController = (function() {

	var Expense = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};

	var Income = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};
	
	var data = {
		allItems: {
			exp: [],
			inc: []
		},
		totals: {
			exp: 0,
			inc: 0
		}
	};

	return {
		addItem: function(type, desc, val) {
			var newItem;

			//create new ID
			if (data.allItems[type].length > 0) {
				ID = data.allItems[type][data.allItems[type].length - 1].id + 1; 
			} else {
				ID = 0;   //for first item in list
			}

			//Create new item based on 'inc' or 'exp' type
			if (type === 'exp') {
				newItem = new Expense(ID, des, value);
			} else if (type === 'inc') {
				newItem = new Income(ID, des, val);
			}
			
			//Push it into our data structure
			data.allItems[type].push(newItem);   // .push() adds element to end of an array
			
			//Return the new element
			return newItem;
		},

		testing: function() {
			console.log(data);
		}
	};

})();



// UI CONTROLLER
var UIController = (function() {

	var DOMstrings = {
		inputType: '.add__type',
		inputDescription: '.add__description',
		inputValue: '.add__value',
		inputBtn: '.add__btn'
	}

	return {
		getInput: function() {	
			return {
				type: document.querySelector(DOMstrings.inputType).value,     //reads value attribute of the type. will be either 'inc' or 'exp'
				description: document.querySelector(DOMstrings.inputDescription).value,
				value: document.querySelector(DOMstrings.inputValue).value 
			};	
		},

		getDOMstrings: function () {
			return DOMstrings;
		}
	};
})();


// GLOBAL APP CONTROLLER. Central place where I am controlling each event, then delegate these tasks to other controllers
var controller = (function(budgetCtrl, UICtrl) {

	var setupEventListeners = function() {
		var DOM = UICtrl.getDOMstrings();

		document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

		document.addEventListener('keypress', function (event) {     //key press doesn't happen on specific element, happens in global document
			if (event.keyCode === 13 || event.which === 13) {    // || pipe = or
				ctrlAddItem();
			}
		});
	};



	var ctrlAddItem = function () {
		
		var input, newItem

		//1. get the field input data
		input = UICtrl.getInput();

		//2. Add the item to the budget controller
		newItem = budgetController.addItem(input.type, input.description, input.value);

		//3. Add new item to user interface
		//4. calculate budget
		//5. display the budget on the user interface
	};

   return {
   		init: function() {
   			console.log('Application has started');
   			setupEventListeners();
   		}
   };

})(budgetController, UIController); 	//this controller knows about the other two modules and it can use their code

//initializes the controller constructor
controller.init();





