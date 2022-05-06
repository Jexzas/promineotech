var expect = chai.expect;


describe('My functions', function () {
    describe('generateCards', function (){
        it('should create a deck of 52 cards, inside the array of a new Deck object', function() {
            generateCards();
            x = actualDeck.cards.length;
            expect(x).to.equal(52);
        });
        it(`should have generated a new Deck object inside actualDeck`, function () {
            generateCards();
            y = (typeof(actualDeck) == "number");
            expect(y).to.equal(false);
        });
        it(`should assign a symbol to each suit`, function() {
            generateCards();
            z = entireDeck[15].suit;
            switch (true) {
                case (z == "Diamonds"):
                    expect(entireDeck[15].symbol).to.equal('&diams;');
                    break;
                case (z == "Spades"):
                    expect(entireDeck[15].symbol).to.equal('&spades;');
                    break;
                case (z == "Clubs"):
                    expect(entireDeck[15].symbol).to.equal('&clubs;');
                    break;
                case (z == "Hearts"):
                    expect(entireDeck[15].symbol).to.equal('&hearts;');
                    break;
            }
        });
    });
    describe(`cardAssign`, function() {
        it('should assign 26 cards to each player', function() {
            player1 = new Player("test");
            player2 = new Player("test2");
            generateCards();
            cardAssign();
            x = player1.hand.length;
            expect(x).to.equal(26);
            y = player2.hand.length;
            expect(y).to.equal(26);
        });
    });
});

