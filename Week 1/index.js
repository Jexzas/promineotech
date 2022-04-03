

var ceoOfWalmart = "Doug McMillan";
var ceoWorth = 100000000;
var popOfBentonville = 49467; 
var bentIndIncome = 42260;
var distTheWealth = ceoWorth / (popOfBentonville - 1);
distTheWealth = distTheWealth.toFixed(2);

var finalState = `${ceoOfWalmart} is the current CEO of Wal-Mart. He has a net worth of $${ceoWorth}. The population of Bentonville, the home of both ${ceoOfWalmart} and Wal-Mart is ${popOfBentonville}.Average income for this city is $${bentIndIncome}. If ${ceoOfWalmart} were to distribute his wealth to the citizens of the town that made him wealthy, each person would receive $${distTheWealth}.`;

var barf = document.getElementById("barf");
barf.innerHTML = finalState;