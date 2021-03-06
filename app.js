/*
* Demonstrates array declarions by storing single variables into an array.
*
* Return	Cars (array), Cars length	
*/
function cars(1,2,3){
	var car1 = "Toyota";
	var car2 = "Jeep Wrangler";
	var car3 = "Mazda";
  	return cars(1,2,3)
	//Create an array declaration named cars and set each car variable as the values.
var arr= cars(1,2,3);
	cars[0]= "Toyota";
	cars[1]= "Jeep Wrangler";   
	cars[2]= "Mazda";
	//Print the created array
console.log(cars)
	//Print the array length
var cars=[
	"Toyota",
	"Jeep Wrangler",
	"Mazda"
	 ];
console.log(cars.length))
	//Return the created array and the array length
	return cars(1,2,3)
}

console.log(cars());

/*
* Demonstrates array declarions by storing parameters into a single array.
*
* Parameters 	food (string), drink (string), dessert (string)
* Return 	An order as a complete sentence represented as a string
*/
function order(food, drink, dessert){
	//Store the parameters in an array called "order"
var arr= order(1,2,3);
	order[0]= "food";
	order[1]= "drink";   
	order[2]= "dessert";
	//Print the array named "order"
console.log(order);
	//Print the length of the array named "order"
var orders=[
	"food",
	"drink",
	"dessert"
	 ];
console.log(order.length);
	//Return the order as a complete sentence represented as a string
	return order(1,2,3)
}

console.log(order("Burger", "root beer", "frosty"));

var currentClasses = [
	"Band", 
	"Biology", 
	"Chemistry", 
	"Orchestra",
	"Physical Education",
	"Physics",
	"Web Development"
];

/*
* Uses for loop to iterate through array passed as a parameter
* and replaces content at specified index within for loop
*
* Return 	classes (array, changed after iteration)
*/
function loopToChange(classes){
	//Print the parameter that is being passed through the function
var arr= currentClasses(1,2,3,4,5,6,7);
	currentClasses[0]= "Band";
	currentClasses[1]= "Biology";   
	currentClasses[2]= "Chemistry";
	currentClasses[3]= "Orchestra";
	currentClasses[4]= "Physical Education";   
	currentClasses[5]= "Physics";
	currentClasses[6]= "Web Development";
	];
	//Use a For loop to iterate through each value in the passed array
var i, len, text;
for (i = 0, len = currentClasses.length, text = "";i < len; i++) {
  console.log("Next is " + currentClasses[i]);
}
	//Return classes
	return currentClasses(1,2,3,4,5,6,7)
}

console.log(loopToChange(currentClasses));

/*
* Uses array method, forEach(), to add the integer 5 to each value in the 
* passed array and sort() to sort the values in increasing order
*
* Return 	numbers (array, incremented and sorted)
*/
function arrayMethodToLoop(numbers){
	//Print the parameter that is being passed through the function
	console.log(arrayMethodToLoop);
	//Use the forEach() method to add 5 to each value in the passed array
	
	//Return the changed array
	return
}

console.log(arrayMethodToLoop([5, 7, 3, 4, 5]));
console.log(arrayMethodToLoop([5 + 1, 3]));

/*
* Demonstrates the array methods: sort(), indexOf(), pop(), and push()
*
* Return 	priorties (array)
*/
function moreArrayMethods(priorities){
	//Print the parameter that is being passed through the function
console.log(priorities)
	//Use the method sort() to sort your priorities
priorities.sort()
	//Use the method indexOf() to replace "Not Going to Class" to "Going to Class"
priorities.indexOf
	//Use the method pop() to remove the item at the end of the array
priorities.pop()
	//Use the method push() to add a priority that is important to the success of this class and don't forget to sort() them afterwards!
priorities.push("think outside the box")
priorities.sort()
	//Return the changed array
	return priorities
}

console.log(moreArrayMethods(["Zero Play", "Sleeping", "HW", "Work", "School", "Planning For Future", "Not Going to Class"]));
