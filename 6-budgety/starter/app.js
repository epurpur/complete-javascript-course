

//START AT VIDEO 82 15:36 timestamp


//BUDGET CONTROLLER
var budgetController = (function() {

	var Expense = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
		this.percentage = -1;
	};

	//use Expense prototype to create method
	Expense.prototype.calcPercentage = function(totalIncome) {

		if (totalIncome > 0) {
			this.percentage = Math.round((this.value / totalIncome) * 100);
		} else {
			this.percentage = -1;
		}
	};


	Expense.prototype.getPercentage = function() {
		return this.percentage;
	};


	var Income = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};
	
	var calculateTotal = function(type) {
		var sum = 0;
		data.allItems[type].forEach(function(cur) {
			sum += cur.value;
		});
		data.totals[type] = sum;    // updates data totals
	};

	var data = {
		allItems: {
			exp: [],
			inc: []
		},
		totals: {
			exp: 0,
			inc: 0
		},
		budget: 0,
		percentage: -1    //percentage value is 'no value' to start
	};

	//these will be publicly available methods
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
				newItem = new Expense(ID, desc, val);
			} else if (type === 'inc') {
				newItem = new Income(ID, desc, val);
			}
			
			//Push it into our data structure
			data.allItems[type].push(newItem);   // .push() adds element to end of an array
			
			//Return the new element
			return newItem;
		},


		deleteItem: function(type, id) {

			var index, ids;
			//need to create array with elements using map()

			var ids = data.allItems[type].map(function(current) {
				return current.id;
			});

			index = ids.indexOf(id);

			if (index !== -1) {
				data.allItems[type].splice(index, 1);   // splice method, first argument is position number at which we want to start deleting
			}
		},

		calculateBudget: function() {
			//Calculate total income and expenses
			calculateTotal('exp');
			calculateTotal('inc');

			//Calculate budget: income - expenses
			data.budget = data.totals.inc - data.totals.exp;

			// calculate percentage of income that we spent
			if (data.totals.inc > 0) {
				data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
			} else {
				data.percentage = -1;    //data percentage doesn't exist if no income
			}
		},


		calculatePercentages: function() {
			// calculate expense percentage for each item in expense array
			data.allItems.exp.forEach(function(cur) {
				cur.calcPercentage(data.totals.inc);
			});

		},

		getPercentages: function() {
			var allPerc = data.allItems.exp.map(function(cur) {
				return cur.getPercentage();
			});
			return allPerc;
		},

		getBudget: function() {
			return {
				budget: data.budget,
				totalInc: data.totals.inc,
				totalExp: data.totals.exp,
				percentage: data.percentage
			}
		},

		testing: function() {     // testing method with returns internal data structures which we can look at in console.
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
		inputBtn: '.add__btn',
		incomeContainer: '.income__list',
		expensesContainer: '.expenses__list',
		budgetLabel: '.budget__value',
		incomeLabel: '.budget__income--value',
		expensesLabel: '.budget__expenses--value',
		percentageLabel: '.budget__expenses--percentage',
		container: '.container',
		expensesPercLabel: '.item__percentage',
		dateLabel: '.budget__title--month'
	};

	var formatNumber = function(num, type) {
			
		var numSplit, int, dec, type;
		// + or - before number. exactly 2 decimal points. comman separating the thousands
		// ex: 2310.4567 -> + 2,310.46

		num = Math.abs(num);  //removes positive or negative from number
		num = num.toFixed(2);  //rounds number to 2 decimal places. method of the number prototype

		numSplit = num.split('.');

		int = numSplit[0];
		if (int.length > 3) {
			int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);  //input 2310 > output 2,310
		}

		dec = numSplit[1];

		return (type === 'exp' ? '-' : '+') + ' ' + int  + '.' + dec;

	};

	var nodeListForEach = function(list, callback) {
		for (var i = 0; i < list.length; i++) {
			callback(list[i], i);
		}
	};

	return {
		getInput: function() {	
			return {
				type: document.querySelector(DOMstrings.inputType).value,     //reads value attribute of the type. will be either 'inc' or 'exp'
				description: document.querySelector(DOMstrings.inputDescription).value,
				value: parseFloat(document.querySelector(DOMstrings.inputValue).value)   // parseFloat converts value from string to number 
			};	
		},

		
		addListItem: function(obj, type) {
			var html, newHtml, element;

			// Create HTML string with placeholder text
			if (type === 'inc'){
				element = DOMstrings.incomeContainer;
				html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"> \
						<div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> \
						</div></div></div>'; 
			} else if (type === 'exp') {
				element = DOMstrings.expensesContainer;
				html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"> \
                        <div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"> \
                        <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> \
                        </div></div></div>';
			}

			// replace placeholder text with some actual data
			newHtml = html.replace('%id%', obj.id);    //id property of object holds the item's id
			newHtml = newHtml.replace('%description%', obj.description);
			newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));

			//Insert HTML into the DOM (using insertAdjacentHTML method)
			document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);   //beforeend makes it so all html is inserted as child to expense/income list as last element

		},


		deleteListItem: function(selectorID) {
			
			//we need class name and ID name in order to remove item
			var el = document.getElementById(selectorID);
			el.parentNode.removeChild(el);
		},


		clearFields: function() {
			var fields, fieldsArr;

			fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);  //querySelectorAll returns list, not array
			
			fieldsArr = Array.prototype.slice.call(fields)  //converts fields list to array

			fieldsArr.forEach(function(current, index, array) {  //forEach method loops over all elements of fieldsArr
				current.value = "";
			});

			//set focus on first element of array (description field)
			fieldsArr[0].focus();
		},


		displayBudget: function(obj) {
			var type;

			obj.budget > 0 ? type = 'inc' : type = 'exp';
			document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type);
			document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
			document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');
			

			if (obj.percentage > 0) {
				document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
			} else {
				document.querySelector(DOMstrings.percentageLabel).textContent = '---';
			}
		},


		displayPercentages: function(percentages) {

			var fields = document.querySelectorAll(DOMstrings.expensesPercLabel);

			nodeListForEach(fields, function(current, index) {
				
				if (percentages[index] > 0) {
					current.textContent = percentages[index] + '%';
				} else {
					current.textContent = '---';
				}
			});

		},


		displayMonth: function() {
			
			//use dateObject constructor
			var now, months, month, year; 
			now = new Date();

			months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
			'September', 'October', 'November', 'December'];
			month = now.getMonth();

			year = now.getFullYear();
			document.querySelector(DOMstrings.dateLabel).textContent = months[month] + ' ' + year;


		},


		changedType: function() {

			var fields = document.querySelectorAll(
				DOMstrings.inputType + ',' + 
				DOMstrings.inputDescription + ',' +
				DOMstrings.inputValue);

			nodeListForEach(fields, function(cur) {
				cur.classList.toggle('red-focus');    //toggle dynamically enables the red focus class
			});

			document.querySelector(DOMstrings.inputBtn).classList.toggle('red');
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

		document.addEventListener('keypress', function(event) {     //key press doesn't happen on specific element, happens in global document
			if (event.keyCode === 13 || event.which === 13) {    // || pipe = or
				ctrlAddItem();
			}
		});

		document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem)

		document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType);
	};


	var updateBudget = function() {
		//1. calculate budget
		budgetCtrl.calculateBudget();

		//2. return budget
		var budget = budgetCtrl.getBudget();

		//3. display the budget on the user interface
		UICtrl.displayBudget(budget);

	};


	var updatePercentages = function() {

		//1. Calculate percentages
		budgetCtrl.calculatePercentages();

		//2. Read percentages from budget controller
		var percentages = budgetCtrl.getPercentages();

		//3. Update user interface with new percentages
		UICtrl.displayPercentages(percentages);

	};


	var ctrlAddItem = function() {
		
		var input, newItem

		//1. get the field input data
		input = UICtrl.getInput();

		if (input.description !== "" && !isNaN(input.value) && input.value > 0) { //input description cannot be empty and number IS a real number and numer is not zero
			//2. Add the item to the budget controller
			newItem = budgetController.addItem(input.type, input.description, input.value);

			//3. Add new item to user interface
			UICtrl.addListItem(newItem, input.type);

			//4. Clear the fields
			UICtrl.clearFields();

			//5. Calculate and update budget
			updateBudget();

			//6. Calculate and upate percentages
			updatePercentages();
		}   
	};

	var ctrlDeleteItem = function(event) {

		var itemID, splitID, type, ID;

		itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;    //finds id of parent node of element where event happened. Moves up DOM chain 4 times to div class item

		if (itemID) {
			splitID = itemID.split('-');  //grabs just 'inc' or 'exp' from element's input string
			type = splitID[0];
			ID = parseInt(splitID[1]);      //convert ID to an integer

			//1. delete item from data structure
			budgetController.deleteItem(type, ID);

			//2. delete item from user interface
			UICtrl.deleteListItem(itemID);

			//3. update and show new budget
			updateBudget();
		}

	};

   return {
   		init: function() {
   			console.log('Application started');
   			UICtrl.displayMonth();
   			UICtrl.displayBudget({
   				budget: 0,
   				totalInc: 0,
   				totalExp: 0,
   				percentage: -1
   			});
   			setupEventListeners();
   		}
   };

})(budgetController, UIController); 	//this controller knows about the other two modules and it can use their code

//initializes the controller constructor. This is available because the init() function is returned from the controller module
controller.init();





