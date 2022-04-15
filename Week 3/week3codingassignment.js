// step 1a
let newArray = ['3', '9', '23', '64', '2', '8', '28', '93'];
function firstLast(array) {
    let firstNum = array[0];
    let lastNum = array.length - 1;
    lastNum = array[lastNum];
    return lastNum - firstNum;
}
console.log("1a: last minus first: " + firstLast(newArray));
// step 1b
newArray.push('55');
console.log("1b: last minus first: " + firstLast(newArray));
// step 1c 
function avgAge(array) {
    let arraySum = 0;
    for (i = 0; i < array.length; i ++) {
        arraySum =+ array[i];
    }
    arrayMean = arraySum / array.length;
    return arrayMean;
}
console.log("1c: average age: " + avgAge(newArray));
//step 2a
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
function avgLetters(array) {
    let totalLength = 0;
    for (person of names) {
        totalLength += person.length;
    } 
    return totalLength / names.length;
}
console.log("2a: avg name length: " + avgLetters(names));
// step 2b
function bigName(array) {
    let concatName = "";
    for (person of names) {
        concatName = concatName + " " + person;
    }
    return concatName;
}
console.log("2b: big name time: " + bigName(names));
// step 5
let nameLengths = [];
for (people of names) {
    nameLengths.push(people.length);
}
console.log("5: length of names array: " + nameLengths);
// step 6
function sumNames(array) {
    let nameSum = 0;
    for (number of nameLengths) {
        nameSum += number;
    }
    return nameSum;
}
console.log("6: sum of all name lengths: " + sumNames(nameLengths));
// step 7
function infConcat(word, n) {
    let concatted = "";
    for (i = 0; i < n; i++) {
        concatted += word;
    }
    return concatted;
} 
console.log("7: word bingo concat x 10: " + infConcat("bingo", 10));
// step 8
function fullName(firstName, lastName) {
    let legalName = firstName + " " + lastName;
    return legalName;
}
console.log("8: 'Jesse Roberts': " + fullName("Jesse", "Roberts"));
// step 9
function isGreater(array) {
    let sumOf = 0;
    for (num of array) {
        sumOf += num;
    }
    if (sumOf > 100) {
        return true;
    } else {
        return false;
    }
}
console.log("9: [9, 5, 55, 100]: " + isGreater([9, 5, 55, 100]));
// step 10
function arrayAvg(array) {
    let sumOf = 0;
    for (num of array) {
        sumOf += num;
    }
    let avgOf = sumOf / array.length;
    return avgOf;
}
console.log("10: avg of [5, 5, 6, 11, 112, 150]: " + arrayAvg([5, 5, 6, 11, 112, 150]));
// step 11
let arr1 = [2, 15, 200, 1, 7];
let arr2 = [2, 16, 199, 1, 6];
function firstGreater(array1, array2) {
    let avg1 = arrayAvg(arr1);
    let avg2 = arrayAvg(arr2);
    if (avg1 > avg2) {
        return true;
    } else {
        return false;
    }
}
console.log("11: arr1 v arr2: " + firstGreater(arr1, arr2));
console.log(" arr2 v arr1: " + firstGreater(arr2, arr1));
// step 12
function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside == true && moneyInPocket > 10.50) {
        return true;
    } else {
        return false;
    }
}
console.log("12; not hot, $15: buy drink? " + willBuyDrink(false, 15));
console.log("hot, 10 dollars: " + willBuyDrink(true, 10));
console.log("hot, 16dollars: " + willBuyDrink(true, 16));
// step 13
// gets a low temp and high temp setting for a smart thermostat, determines whether to run AC, heat, none
function thermoStat(low, high, current) {
    if (current < low) {
        return "The heater will now run";
    } else if (current > high) {
        return "The AC will now run";
    } else {
        return "The temperature in the house is within range";
    }
}
console.log("13: Temp range: 68-73, current temp: 55: " + thermoStat(68, 73, 55));
console.log("Temp range: 68-73, current temp: 71: " + thermoStat(68, 73, 55));
console.log("Temp range: 68-73, current temp: 79: " + thermoStat(68, 73, 55));