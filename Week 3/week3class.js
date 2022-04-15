class yugiohCard {
    constructor (name, atk, def, desc) {
        this.name = name;
        this.atk = atk;
        this.def = def;
        this.stars = (parseFloat(atk) + parseFloat(def))/1000;
        this.desc = desc;
    }
}

let cardName;
let cardAtk;
let cardDef;
let cardDesc;
let yourCard;


function cardCreate() {
    cardName = prompt("Name your card:");
    cardAtk = prompt("How many attack points does your card have?");
    cardDef = prompt("How many defense points does your card have?");
    cardDesc = prompt("Describe your card a little bit:");
    yourCard = new yugiohCard(cardName, cardAtk, cardDef, cardDesc);
    document.getElementById("deck").innerHTML += `    <div class=" border border-dark rounded card col-sm-4 mx-auto" >
    <div class="card-body">
      <h5 class="card-title" id="name">${yourCard.name}</h5>
      <h6 id="stars" class="card-subtitle mb-2">${yourCard.stars} stars</h6>
      <p id="desc" class="card-text">${yourCard.desc}</p>
      <p id="atk" class="card-link">Atk: ${yourCard.atk}</a>
      <p id="def" class="card-link">Def: ${yourCard.def}</a>
    </div>
  </div>`
}

function consoleCreate() {
    for (i = 0; i < 40; i++) {
        let cardName = `card${i}`;
        let cardAtk = 1000 + i;
        let cardDef = 900 + i;
        let cardDesc = `This is card number ${i}. Don't worry about it.`;
        yourCard = new yugiohCard(cardName, cardAtk, cardDef, cardDesc);
        document.getElementById("deck").innerHTML += `    <div class=" border border-dark rounded card col-sm-4 mx-auto" >
        <div class="card-body">
          <h5 class="card-title" id="name">${yourCard.name}</h5>
          <h6 id="stars" class="card-subtitle mb-2">${yourCard.stars} stars</h6>
          <img src="./images/${i}.png"/>
          <p id="desc" class="card-text">${yourCard.desc}</p>
          <p id="atk" class="card-link">Atk: ${yourCard.atk}</a>
          <p id="def" class="card-link">Def: ${yourCard.def}</a>
        </div>
      </div>`
    }

}
