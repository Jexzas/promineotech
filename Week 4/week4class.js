let isEven = (num) => (num % 2) == 0;
let avgGas = 3.67;
let avgDiesel = 4.76;
let avgFuelForYourCar;
class cars {
    constructor (year, make, model, color, gastank, mpg, fuel) {
        this.year = year;
        this.make = make;
        this.model = model;
        this.color = color;
        this.gastank = gastank;
        this.mpg = mpg;
        this.fuelType = fuel;
    }
}
let yourCar;

let newCarConstruction = () => {
    let yourYear = prompt("What year is your car?");
    let yourMake = prompt("What make is your car?");
    let yourModel = prompt("What model is your car?");
    let yourColor = prompt("What color is your car?");
    let fuelType = prompt("Gas or diesel?");
    if (fuelType.toLowerCase == "gas" || fuelType.toLowerCase == "gasoline"){
        avgFuelForYourCar = avgGas;
    } else {
        avgFuelForYourCar = avgDiesel;
    }
    let yourGasTank = prompt("How many gallons of fuel does it hold?");
    yourGasTank = parseInt(yourGasTank);
    let yourMpg = prompt("What's the MPG rating of that car?");
    yourMpg = parseInt(yourMpg);
    yourCar = new cars(yourYear, yourMake, yourModel, yourColor, yourGasTank, yourMpg, fuelType);
}

let tripCalculator = () => {
    newCarConstruction();
    let distance = prompt("How far are you trying to travel (miles)?");
    distance = parseInt(distance);
    console.log(distance);
    let destination = prompt("And where to?");
    let costPerMile = avgFuelForYourCar / parseInt(yourCar.mpg);
    costPerMile = costPerMile.toFixed(2);
    console.log(costPerMile);
    let totalCost = (costPerMile * distance * 2);
    totalCost = totalCost.toFixed(2);
    let tanksUsed = ((distance * 2) / (parseInt(yourCar.mpg) * parseInt(yourCar.gastank)));
    tanksUsed = tanksUsed.toFixed(2);
    alert(`Okay! I think I've got this figured out. If you're going to drive to ${destination} in your ${yourCar.color} ${yourCar.year} ${yourCar.make} ${yourCar.model}, which is ${distance} miles away, that's going to cost you $${totalCost} for a round-trip. You're going to buy ${tanksUsed} tanks of ${yourCar.fuelType}. If you were wondering, you're spending ${costPerMile} dollars per mile.`);
}