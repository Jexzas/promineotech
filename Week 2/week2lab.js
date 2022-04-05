// create a variable called speedLimit and another called mySpeed
// set their values to numbers between 1 and 100
var speedLimit = 65;
var mySpeed = 72;

// using a conditional, determine if mySpeed is greater than the speedLimit
// if true, print "Slow Down! Mom is mad!" to the console
// if mySpeed is equal to the speedLimit, print "Everyone is happy!" to the console
// if mySpeed is less than the speedLimit, print "Speed up! Dad is mad!"
if (mySpeed > speedLimit) {
    console.log("Slow Down! Mom is mad!");
} else if (mySpeed == speedLimit) {
    console.log("Everyone is happy!");
} else {
    console.log("Speed up! Dad is mad!");
}

// create two variables, one named alarmSet, the other openDoor
// set them to a boolean value
var alarmSet = false;
var openDoor = true;

// using a conditional, determine if alarm is set. 
// if alarm is set and door is set to open, print "Sound Alarm!" to the console
// otherwise, print "Everything is fine." to the console.
if (alarmSet && openDoor) {
    console.log("Sound alarm!");
} else {
    console.log("Everything is fine.");
}



// create two variables, username and password
// create a conditional, if the username is "Tommy123" and the password is "12345"
// or the username is "Timmy456" and the password is "6789", print "Admin Login Successful" to the console
// otherwise, print "Admin Access Denied"
var username = "jimmy"; 
var password = "spicyjimmychips";
if ((username == "Tommy123" && password == "12345") || (username == "Timmy456" && password == "6789")) {
    console.log("Admin Login Successful");
} else {
    console.log("Admin Access Denied");
}

// write code that will set the value of studentClass based on studentGrade
// studentGrade will be K-12
// K-6 will be Elementary
// 7-8 will be Middle
// 9 will be Freshman, 10 Sophomore, 11 Junior, 12 Senior
// Anything other than these values will return "Error" to the console
let studentClass;
var studentGrade = 12;
switch (true) {
    case (studentGrade < 7):
        studentClass = "Elementary";
        console.log(studentClass);
        break;
    case (studentGrade > 6 && studentGrade < 9):
        studentClass = "Middle";
        console.log(studentClass);
        break;
    case (studentGrade == 9):
        studentClass = "Freshman";
        console.log(studentClass);
        break;
    case (studentGrade == 10):
        studentClass = "Sophomore";
        console.log(studentClass);
        break;
    case (studentGrade == 11):
        studentClass = "Junior";
        console.log(studentClass);
        break;
    case (studentGrade == 12):
        studentClass = "Senior";
        console.log(studentClass);
        break;
    default:
        console.log("Error");
        break;
}



// write a for loop that will iterate backwards from 10 to -10
for (i = 10; i > -11; i--) {
    console.log(i);
}


// write a do/while loop that prints 1 through 50
// let it = 1;
// do {
//     console.log(it);
//     it++;
// } while (it < 51);

// edit the previous do/while loop so that it prints the remainder when the loop number is divided by 4
let it = 1;
do {
    console.log(it % 4);
    it++;
} while (it < 51);

// Someone messed up the following for loop
// fix the following infinite loop, uncomment to test

    for(let i = 11; i < 20; i++){
        console.log(i);
    } 






