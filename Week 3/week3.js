function myFunction(i) {
    for (i; i < 100; i++) {
        console.log(i);
    }
}

let fullName;
function createFullName(firstName, lastName) {
    fullName = (`${firstName} ${lastName}`);
}

let names = ["j", "bob", "biggy", "biggye", "bohannon"];
let lengths = names.map(
    function(element) {
        return element.length;
    }
);

let sum = lengths.reduce(function(previous, current){
    return previous + current;
});

class things {
    constructor (name, height, weight, cost) {
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.cost = cost;
        this.declare = function() {
            return `${name}! Height: ${this.height}, weight: ${this.weight}, cost: ${this.cost}.`;
        }

    }
}




