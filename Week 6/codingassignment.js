// declaring the classes in the same file to avoid confusion and issues i've had with loading multiple scripts
class Deck {
    constructor() {
        this.cards = [];
    }

    shuffle() {
        // jeff wrote this code in class, I was not familiar enough with sort yet to understnad how you can use with function
        this.cards.sort(() => Math.random() - 0.5);
    }
}

class Card {
    constructor(s, v) {
        this.suit = s;
        this.value = v;
        this.name; 
        this.played = false;
        this.symbol;
    }
}

class Player {
    constructor(name) {
        this.hand = [];
        this.name = name;
        this.points = 0;
    }
    cardPlayed(index) {
        this.hand[index].played = true;
    }
}






// player create
let player1;
let player2;
function players() {
    p1name = prompt("Player 1: What is your name?");
    p2name = prompt("Player 2: What is your name?");
    player1 = new Player(p1name);
    player2 = new Player(p2name);
    document.getElementById('player1Name').innerHTML = player1.name + ':';
    document.getElementById('player2Name').innerHTML = player2.name + ':';
}

// card creator
let entireDeck = []; 
let arrayOfPossibleCards = [];
let actualDeck;
for (i = 1; i < 14; i++) {
    arrayOfPossibleCards.push(i);
}
let arrayOfSuits = ["Hearts", "Spades", "Clubs", "Diamonds"];
function generateCards () {
    let newCard;
    for (suit of arrayOfSuits) {
        for (i = 1; i < 14; i++) {
            newCard = new Card(suit, i);
            entireDeck.push(newCard);
        }
    }
    for (card of entireDeck) {
        if (card.value == 1) {
            card.name = "ace";
        } else if (card.value == 11) {
            card.name = "jack";
        } else if (card.value == 12) {
            card.name = "queen";
        } else if (card.value == 13) {
            card.name = "king";
        }
    }
    for (card of entireDeck) {
        switch (true) {
            case (card.suit == "Hearts"):
                card.symbol = "<h1 style='color:red;'>&hearts;</h1>";
                break;
            case (card.suit == "Spades"):
                card.symbol = "&spades;";
                break;
            case (card.suit == "Clubs"):
                card.symbol = "&clubs;";
                break;
            case (card.suit == "Diamonds"):
                card.symbol = "<h1 style='color:red;'>&diams;</h1>";
                break;
        }
    }
    actualDeck = new Deck();
    for (card of entireDeck) {
        actualDeck.cards.push(card); 
    }
}

// assign cards to players
function cardAssign() {
    for (i = 0; i < 26; i++) {
        player1.hand.push(actualDeck.cards[i]);
    };
    for (i = 26; i < 52; i++){
        player2.hand.push(actualDeck.cards[i]);
    }
}



// card compare
function war() {
    for (i = 0; i < 26; i++) {
        let player1Card = player1.hand[i];
        let player1Face = player1Card.name;
        let player2Card = player2.hand[i];
        let player2Face = player2Card.name;
        player1.cardPlayed(i);

        console.log(player1Card);
        player2.cardPlayed(i);
        console.log(player2Card);
        if (player1Card.value > player2Card.value) {
            // make this do something in the DOM
            player1.points ++;
            // alert(`${player1.name}'s card beats ${player2.name}'s!`);
        } else if (player1Card.value < player2Card.value) {
            // make this do something in the DOM
            player2.points ++; 
            // alert(`${player2.name}'s card beats ${player1.name}'s!`);
        } else {
            // alert(`The cards tied!`);
        }
        if (player1Face) {
            player1Card.value = player1Card.name;
        }
        if (player2Face) {
            player2Card.value = player2Card.name;
        }
        document.getElementById('p1points').innerHTML = player1.points;
        document.getElementById('p2points').innerHTML = player2.points;
            // generate html card using template from getbootstrap.com
                let visibleCard1 = `
                <div class="card" style="width: 6rem;">
                    <h5 class="card-title">${player1Card.value}</h5>
                    <h1 class="card-title">${player1Card.symbol}</h1>
                </div>
                `;
                let visibleCard2 = `
                <div class="card" style="width: 6rem;">
                    <h5 class="card-title">${player2Card.value}</h5>
                    <h1 class="card-title">${player2Card.symbol}</h1>
                </div>
                `;
            // just separating this code
        document.getElementById('player1').innerHTML += visibleCard1;
        document.getElementById('player2').innerHTML += visibleCard2;
    
    }

}

// game start

function gameStart() {
    generateCards();
    actualDeck.shuffle();
    cardAssign();
    gamePlay();
}

// actual gameplay function
function gamePlay() {
    alert("Let's go!");
    war();
    console.log(`Player 1 has ${player1.points} points. Player 2 has ${player2.points} points.`);
    document.getElementById('p1points').innerHTML = player1.points;
    document.getElementById('p2points').innerHTML = player2.points;
    let winner;
    if (player1.points > player2.points) {
        document.getElementById('p1points').style = "color: red";
        document.getElementById('p2points').style = "color: black";
        document.getElementById('p1points').innerHTML += ` ${player1.name} WINS!`;
    } else if (player1.points < player2.points) {
        document.getElementById('p2points').style = "color: red";
        document.getElementById('p1points').style = "color: black";
        document.getElementById('p2points').innerHTML += ` ${player2.name} WINS!`;
    } else {
        document.getElementById("blankUnlessDraw").innerHTML = `IT'S A DRAW!`;
        document.getElementById('p2points').style = "color: black";
        document.getElementById('p1points').style = "color: black";
    }
}


