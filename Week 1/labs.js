//create a variable to hold the quantity of available plane seats left on a flight
let availablePlaneSeats = 6;

		
//create a variable to hold the cost of groceries at checkout
let costOfGroceries = 13.50;

//create a variable to hold a person's middle initial
let personMiddleInitial = "D";

//create a variable to hold true if it's hot outside and false if it's cold outside
let isHotOutside = true;
//create a variable to hold a customer's first name
let customerFirstName = "Jeremy";

//create a variable to hold a street address
let streetAddress = "250 W Jeremy's Way Way, Bentonville-Jacksonville, Arkansouisiana 66666";

//print all variables to the console
console.log(availablePlaneSeats);
console.log(costOfGroceries);
console.log(personMiddleInitial);
console.log(isHotOutside);
console.log(customerFirstName);
console.log(streetAddress);



//a customer booked 2 plane seats, remove 2 seats from the available seats variable
availablePlaneSeats -= 2;

//impulse candy bar purchase, add 2.15 to the grocery total
//costOfGroceries = costOfGroceries + 2.15;
costOfGroceries += 2.15;

//birth certificate was printed incorrectly, change the middle initial to something else
personMiddleInitial = "J";

//the season has changed, update the hot outside variable to be opposite of what it was
isHotOutside = false;

//create a new variable called full name using the customer's first name, the middle initial, and a last name of your choice
let fullName = customerFirstName + " " + personMiddleInitial + " Barclay";

//print a line to the console that introduces the customer and says they live at the address variable
alert(`Good evening! I'd like you to meet my friend ${fullName}! They live at ${streetAddress}.`);