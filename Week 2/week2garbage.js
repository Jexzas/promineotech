alert("I'm gonna go get gas and milk! But, I don't know how much gas will be at Wal-Mart and Costco, so I should find out!");
var costcoGas = prompt("What is the price of gas at Costco?");
var walmartGas = prompt("What is the price of gas at Wal-Mart?");
var costcoMilk = prompt("What is the price of milk (gallon) at Costco?");
var walmartMilk = prompt("What is the price of milk (gallon) at Wal-Mart");
var tankSize = prompt("How many gallons of gas does your car use? This is important.");
tankSize = parseInt(tankSize);
function gasPriceCollectConvert(itemPrice) {
    if (typeof itemPrice == "string" && parseFloat(itemPrice) != "NaN") {
        var itemCost = parseFloat(itemPrice);
        itemCost = itemCost.toFixed(2);
        itemCost = parseFloat(itemCost);
        return itemCost;
    }

}
costcoGas = gasPriceCollectConvert(costcoGas);
walmartGas = gasPriceCollectConvert(walmartGas);
costcoMilk = gasPriceCollectConvert(costcoMilk);
walmartMilk = gasPriceCollectConvert(walmartMilk);

function totalCost(gas, milk) {
    return (gas * tankSize) + milk;
}
var totalCostco = totalCost(costcoGas, costcoMilk);
var totalWalmart = totalCost(walmartGas, walmartMilk);
document.open();

if (typeof totalCostco != "number" || typeof totalWalmart != "number") {
    document.write("<h1>Oh no</h1>")
} else if (totalCostco < totalWalmart) {
    document.write("<h1>" + `You should go to Costco! With a gas price of $${costcoGas}, ${tankSize} gallons of gas and one gallon of milk will cost $${totalCostco} compared to Wal-Mart's $${totalWalmart}.` + "</h1>");
;
} else {
    document.write("<h1>" + `You should go to Wal-Mart. With a gas price of $${walmartGas}, ${tankSize} gallons of gas and one gallon of milk will cost $${totalWalmart} compared to Costco's $${totalCostco}.` + "</h1>");
}
document.close();