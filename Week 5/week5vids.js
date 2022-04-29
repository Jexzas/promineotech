
let dvdPlayer = {
    height: 3,
    width: 15,
    color: "blue",
    Play: function (){
        console.log("The video will play");
    },
    FastForward: function (){
        console.log("Fast-forwarding...");
    },
    Rewind: function (){
        console.log("Rewinding...");
    },
    Pause: function (){
        console.log("The video is paused");
    },

}

class House {
    constructor(bedrooms, bathrooms, floors, basement, garage, specialFact) {
        this.bedrooms = bedrooms;
        this.bathrooms = bathrooms;
        this.floors = floors;
        this.basement = basement;
        this.garage = garage;
        this.specialFact = specialFact;
        this.Zillow = function () {
            if (this.basement) {
                alert(`Welcome to our showing! This house, you'll find, has ${bedrooms} bedrooms, ${bathrooms} bathrooms, consists of ${floors} floors, a(n) ${garage} garage, and has a(n) ${basement} basement, and ${specialFact}!`);
            } else {
                alert(`Welcome to our showing! This house, you'll find, has ${bedrooms} bedrooms, ${bathrooms} bathrooms, consists of ${floors} floors, a(n) ${garage} garage, and ${specialFact}!`);
            };
        }
    }
}

class Cars {
    constructor(model, year, make, color) {
        this.model = model;
        this.year = year;
        this.make = make;
        this.color = color;
        this.position = 'The car is turned off';
        this.Start = function () {
            console.log(`The ${model}'s engine turns on.`);
            this.position = 'The car is turned on';
        };
        this.Stop = function () {
            console.log(`The ${model}'s engine turns off.`);
            this.position = `The car is turned off`;
        };
        this.Gas = function () {
            console.log(`The ${model} accelerates.`);
            this.position = `The car is driving`;
        };
        this.Brake = function () {
            console.log(`The ${model} decelerates.`);
            this.position = `The car is stopped`;
        }
    }
}

function status(car){
    alert(`${car.model} status: ${car.position}.`);
}
function about(car){
    alert(`The car is a ${car.year} ${car.make} ${car.model}. It is ${car.color}.`);
}

// This is a worthless class constructor that was in the video 
// class Student {
//     constructor() {
//         this.firstName = 'Sam';
//         this.lastName = 'Smith';
//         this.phoneNumber = '480555555';
//         this.grade = 'A';
//     }
// }

//more useful one
class Student {
    constructor(firstName, lastName, phoneNumber, grade) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.grade = grade;
    }
    introduce() {
        console.log(`${this.firstName} ${this.lastName} can be reached at ${this.phoneNumber}.`);
    }
}
let firsts = ['Jimmy', 'Joey', 'Sarah', 'Bigby', 'Boscow'];
let lasts = ['Johnson', 'Taggart', 'Bohannon', 'Bagby', 'Baconly'];
let phones = [88888888, 01010101, 10100200, 198393939, 3000300];
let grades = ['A', 'C', 'F', 'F', 'F'];
let students = [];
function createClassOfKids () {
    for (i = 0; i < 150000; i ++) {
        let firstName = Math.floor(Math.random() * 5);
        let lastName = Math.floor(Math.random() * 5);
        let phoneNumber = Math.floor(Math.random() * 5);
        let grade = Math.floor(Math.random() * 5);
        students.push(new Student(firsts[firstName], lasts[lastName], phones[phoneNumber], grades[grade]));
    }
}
let johnsonFamily = [];
let taggartFamily = [];
let bohannonFamily = [];
let bagbyFamily = [];
let baconlyFamily = [];
function sortThoseKids() {

    for (student of students) {
        if (student.lastName == 'Johnson') {
            johnsonFamily.push(student);
        } else if (student.lastName == 'Taggart') {
            taggartFamily.push(student);
        } else if (student.lastName == 'Bohannon') {
            bohannonFamily.push(student);
        } else if (student.lastName == 'Bagby') {
            bagbyFamily.push(student);
        } else if (student.lastName == 'Baconly') {
            baconlyFamily.push(student);
        } else {
            alert("That's not valid!");
        }
    }
}



function cardCreator(chosenStudent) {

    function cardGenerator() {
        let card = `<div class="border border-dark rounded card col-sm-4 mx-auto" >
        <div class="card-body">
          <h5 class="card-title" id="name">${this.firstName} ${this.lastName}</h5>
          <h6 id="stars" class="card-subtitle mb-2">Grade: ${this.grade}</h6>
          <p id="desc" class="card-text"></p>
          <p id="atk" class="card-link">Phone: ${this.phoneNumber} </a>
          <p id="def" class="card-link"></a>
        </div>
        </div>`;
        document.body.innerHTML += card;
    }
    cardGenerator.call(chosenStudent);

}

function studentCreate(){
    let newStudent = new Student(document.getElementById("fname").value, document.getElementById("lname").value, document.getElementById("pnum").value, document.getElementById("grade").value);
    cardCreator(newStudent);
}

class SenderParent {
    constructor(status) {
        this.status = status;
    }
}

class PromotionSender {
    constructor() {

    }
    sendNotification(notification) {
        console.log(`Sending: ${notification}`);
    }

    findUsersWithStatus(status) {
        let users = getUsers(status);
        return users;
    }
    calculateDiscount(status,) {
        if (status === 'GOLD') {
            return .3;
        } else if (status === 'SILVER'){
            return .15;
        }
        return 0;
    }
}

class CollectionsSender {
    constructor() {

    }

    sendNotification(notification) {
        console.log('Sending: ' + notification);

    }
    
    findUsersWithStatus(status) {
        let users = getUsers(status);
        return users;
    }
    calculateFee(status) {
        if (status === 'OVERDUE') {
            return 10;
        } else if (status === 'DELINQUENT') {
            return 25;
        }
        return 5;
    }
}

