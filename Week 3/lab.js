// const { array } = require("prop-types");

let array1 = [1, 5, 6, 9, 10, 14];

// print the 3rd element in array1
console.log(array1[2]);
// print the last element in array1
var last = array1.length;
console.log(array1[last - 1]);

// add 16 and 3 to array1
array1.push(16,3);
console.log(array1);
// sort the array, then print the 3rd element again
array1 = array1.sort();
console.log(array1[2]);

// did it change?
// yes

// create a variable called myTodoList that holds an empty array
let myTodoList = [];

// add three todo items to the array using a built-in array method
myTodoList.push('jingle', 'jangle', 'bongle');


// remove the second item in the array
myTodoList.splice(1,1);
// create another array, yourTodoList, and add two todo items
let yourTodoList = ['Bake a cake', 'Eat the cake'];
// create another array, ourTodoList
let ourTodoList = [];
// combine myTodoList and yourTodoList into ourTodoList
ourTodoList = myTodoList.concat(yourTodoList);
console.log(ourTodoList);
// sort the following array from Z-A
ourTodoList = ourTodoList.sort();
console.log(ourTodoList);
ourTodoList = ourTodoList.reverse();
console.log(ourTodoList);

// create a function called reverse that takes in parameter
// this function will return the opposite of whatever is passed in
// if its a boolean, return the opposite
// if its a number, or a string, return the reverse (i.e. 1234 becomes 4321, Name becomes emaN)
// if its an array, return the reversed array with each element reversed
function reversed(input) {
    if (typeof input == "boolean") {
        let newBool;
        if (input == false) {
            newBool = true;
            return newBool;
        } else {
            newBool = false;
            return newBool;
        }
    } else if (typeof input == "string") {
        let origText = input;
        let newText = "";
        let lengthOf = origText.length;
        for (i = lengthOf - 1; i > -1; i--) {
            newText += origText[i];
        }
        return newText;
    } else if (typeof input == "number") {
        let origNumber = input.toString();
        let newNumber = "";
        let lengthOf = origNumber.length;
        for (i = lengthOf - 1; i > -1; i--) {
            newNumber += origNumber[i];
        }
        return parseInt(newNumber);
    } else if (Array.isArray(input)) {
        let newArray = input.reverse();
        let anotherNewArray = newArray;
        newArray = [];
                        for (item in anotherNewArray) {
                            if (typeof item == "boolean") {
                                let arrayNewBool;
                                if (item == false) {
                                    arrayNewBool = true;
                                    newArray.push(arrayNewBool);
                                } else {
                                    arrayNewBool = false;
                                    newArray.push(arrayNewBool);
                                }
                            } else if (typeof item == "string") {
                                let arrayOrigText = item;
                                let arrayNewText = "";
                                let lengthOf = arrayOrigText.length;
                                for (i = lengthOf - 1; i > -1; i--) {
                                    arrayNewText += arrayOrigText[i];
                                }
                                return arrayNewText;
                            } else if (typeof item == "number") {
                                let arrayOrigNumber = item.toString();
                                let arrayNewNumber = "";
                                let lengthOf = arrayOrigNumber.length;
                                for (i = lengthOf - 1; i > -1; i--) {
                                    arrayNewNumber += arrayOrigNumber[i];
                                }
                                newArray.push(parseInt(arrayNewNumber));
           }
        }
        return newArray;
    }
}





// create a function called addingMachine that will add all passed numbers and return the total
// Note: you don't know how many numbers will be passed
function addingMachine (numbers) {
    let anArray = arguments;
    let argumentSum = 0;
    for (numbers of anArray) {
        argumentSum += numbers;
    }
    return argumentSum;
}


// You just signed a contract as an estimator for a restoration company. 
// Your contract states that you take home 10% of the profits on the first $100,000
// 20% on the next $400,000
// 35% on the next $500,000
// 40% on all profits above $1,000,000
// create a function that will allow you to check how much of a bonus you make
// the function should take in two variables as arguments, grossInvoiced and profitMargin

function bonusTime (grossInvoiced, profitMargin) {
    let profit = 0;
    if (grossInvoiced <= 100000) {
        profit = (grossInvoiced / 10);
    } else if (grossInvoiced > 100000 && grossInvoiced <= 400000) {
        profit = 10000 + ((grossInvoiced - 100000) / 5);
    } else if (grossInvoiced > 400000 && grossInvoiced <= 1000000) {
        profit = 10000 + 80000 + ((grossInvoiced - 500000) * .35);
    } else if (grossInvoiced > 1000000) {
        profit = 10000 + 80000 + (500000 * .35) + ((grossInvoiced - 1000000) * .4);
    }
    return profit.toFixed(2);
}



// example stuff for research assignment

function myFunc() {
    let nameOfSoldier = "Karl";
    let armyOfKarl = [];
    for (i = 0; i < 10; i++) {
        armyOfKarl.push(nameOfSoldier + i);
    }
    return armyOfKarl;
}
// not a closure
// returns '['Karl0', 'Karl1', 'Karl2', 'Karl3', 'Karl4', 'Karl5', 'Karl6', 'Karl7', 'Karl8', 'Karl9']'

const soldierName = "Drew";
function closureFunc() {
    let army = [];
    for (i = 0; i < 100; i++) {
        army.push(soldierName + i);
    }
    return army;
}
// closure
// returns ['Drew0', 'Drew1', 'Drew2', 'Drew3', 'Drew4', 'Drew5', 'Drew6', 'Drew7', 
// 'Drew8', 'Drew9', 'Drew10', 'Drew11', 'Drew12', 'Drew13', 'Drew14', 'Drew15', 'Drew16', 'Drew17', 
// 'Drew18', 'Drew19', 'Drew20', 'Drew21', 'Drew22', 'Drew23', 'Drew24', 'Drew25', 'Drew26', 'Drew27', 'Drew28', 'Drew29', 
// 'Drew30', 'Drew31', 'Drew32', 'Drew33', 'Drew34', 'Drew35', 'Drew36', 'Drew37', 'Drew38', 'Drew39', 'Drew40', 'Drew41', 'Drew42', 
// 'Drew43', 'Drew44', 'Drew45', 'Drew46', 'Drew47', 'Drew48', 'Drew49', 'Drew50', 'Drew51', 'Drew52', 'Drew53', 'Drew54',
//  'Drew55', 'Drew56', 'Drew57', 'Drew58', 'Drew59', 'Drew60', 'Drew61', 'Drew62', 'Drew63', 'Drew64', 'Drew65', 'Drew66', 
//  'Drew67', 'Drew68', 'Drew69', 'Drew70', 'Drew71', 'Drew72', 'Drew73', 'Drew74', 'Drew75', 'Drew76', 'Drew77', 'Drew78', 
//  'Drew79', 'Drew80', 'Drew81', 'Drew82', 'Drew83', 'Drew84', 'Drew85', 'Drew86', 'Drew87', 
// 'Drew88', 'Drew89', 'Drew90', 'Drew91', 'Drew92', 'Drew93', 'Drew94', 'Drew95', 'Drew96', 'Drew97', 'Drew98', 'Drew99']