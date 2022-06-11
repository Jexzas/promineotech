let bannerText = $('#banner');
let turnCounter = 0;
let xTurn = 'X';
let oTurn = 'O';
// x turn will be the even turn, o turn will be the odd turn
let whoseTurn = '';
let winner = '';
let board = $('#tictactoe');



function reset() {
    turnCounter = 0;
    winner = '';
    bannerText.text(`Let's Play a Game!`);
    $('td').text('');
}

function gamePlay() {
    whoseTurn = `It is X's turn!`;
    bannerText.text(whoseTurn);
    $('td').on('click', () => {
        let target = $(event.target);
        if (target.text() !== 'X' && target.text() !== 'O' && turnCounter !== 9) {
            if (whoseTurn == `It is X's turn!`) {
                target.text(xTurn);
                whoseTurn = `It is O's turn!`;
                bannerText.text(whoseTurn);
    
            } else if (whoseTurn == `It is O's turn!`) {
                target.text(oTurn);
                whoseTurn = `It is X's turn!`;
                bannerText.text(whoseTurn);
            }
        }
        turnCounter++;
        checkForWinner();
    
    });

}


$('#startButton').click(() => {gamePlay()});
$('#resetButton').click(() => {reset()});

function checkForWinner() {
    let row1 = [$('#square1'), $('#square2'), $('#square3')];
    let row2 = [$('#square4'), $('#square5'), $('#square6')];
    let row3 = [$('#square7'), $('#square8'), $('#square9')];
    let col1 = [$('#square1'), $('#square4'), $('#square7')];
    let col2 = [$('#square2'), $('#square5'), $('#square8')];
    let col3 = [$('#square3'), $('#square6'), $('#square9')];
    let diag1 = [$('#square1'), $('#square5'), $('#square9')];
    let diag2 = [$('#square3'), $('#square5'), $('#square7')];
    let combos = [row1, row2, row3, col1, col2, col3, diag1, diag2];
    for (combo of combos) {
        if (combo[0].text() === combo[1].text() && combo[1].text() === combo[2].text()) {
            if (combo[0].text() == 'X' || combo[0].text() == 'O') {
                winner = combo[0].text();
                $('td').off();
            }

        }
    }
    if (winner) {
        bannerText.text(`${winner} is the winner!`);
    } else if (winner == '' && turnCounter == 9) {
        bannerText.text(`It's a draw!`);
    } 

}