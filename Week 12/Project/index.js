let app = $('#app');
let addSpecies = $('#submit');
let speciesTable = [];
let speciesNumber = 0;


class Species {
    constructor(name, variety, id) {
        this.name = name;
        this.variety = variety;
        this.id = id;
        this.stock = [];
    }
    deleteMe() {
        let index = speciesTable.indexOf(this);
        speciesTable.splice(index, 1);
    }
}

class Board {
    constructor(length, width, thick, planed) {
        this.length = length;
        this.width = width;
        this.thick = thick;
        this.planed =  planed;
        this.stockNumber = '';
    }
}

addSpecies.on('click', () => {
    let speciesName = $('#species').val();
    let variety = $('#variety').val();
    // console.log(speciesName, variety);
    let newSpecies = new Species(speciesName, variety, `wood${speciesNumber}`);
    speciesTable.push(newSpecies);
    createSpeciesDOM(newSpecies);
});

function createSpeciesDOM(species) {
    let domAction = document.createElement('div');
    domAction.id = species.name;
    domAction.classList.add('container-fluid', 'row', 'text-center', 'card');
    if ((speciesNumber % 2) == 0 || speciesNumber == 0) {
        domAction.classList.add('bg-info');
    } else {
        domAction.classList.add('bg-primary');
    }

    domAction.innerHTML = `
    <div class='card-body d-flex' id='wood${speciesNumber}'>
        <div class='col-6'><h1>Wood #${speciesNumber}</h1>
            <form class='form-group' id='woodDetailsForm'>
                <input type='text' class='form-control' id='boardLength${speciesNumber}' placeholder='Board Length (inches)'>
                <input type='text' class='form-control' id='boardWidth${speciesNumber}' placeholder='Board Width (inches)'>
                <input type='text' class='form-control' id='boardThickness${speciesNumber}' placeholder='Board Thickness (inches)'>
                <input type='text' class='form-control' id='boardPlaned${speciesNumber}' placeholder='Planed? (Yes or no)'>
                <button type='button' class='btn btn-warning form-control' onclick='addBoard(${speciesNumber})'>Add Board</button>
            </form>
        </div>
        <div class='col-6'><h1 id='wood${speciesNumber}Name'>${species.name}</h1><br><h2 id='wood${speciesNumber}Variety'>${species.variety}</h2>
            <div class='card card-body bg-primary'>
                <ul class='text-dark list-group' class='boardList' list-style='none' id='boards${speciesNumber}'>
                <li class='list-group-item text-left'><h3>Board stock:</h3></li>
                </ul>
            </div>
        </div>

  
    </div>
    <div class='container-fluid mx-0'>
        <button id='speciesDelete${speciesNumber}' type='button' class='btn btn-danger col-4'>Delete</button>
    </div>
    
    `;
    app.prepend(domAction);
    $(document).on('click', `#speciesDelete${speciesNumber}`, () => {
        domAction.remove();
        species.deleteMe();
    });

    speciesNumber++;
    $('#species').val("");
    $('#variety').val("");


}

function addBoard(number) {
    let currentSpecies = speciesTable.findIndex(object => {
        return object.id === `wood${number}`;
    })
    let boardLength = $(`#boardLength${number}`).val();
    let boardWidth = $(`#boardWidth${number}`).val();
    let boardThick = $(`#boardThickness${number}`).val();
    let boardPlaned = $(`#boardPlaned${number}`).val();
    // console.log(boardLength, boardWidth, boardThick, boardPlaned);
    let newBoard = new Board(boardLength, boardWidth, boardThick, boardPlaned);
    newBoard.stockNumber = (speciesTable[currentSpecies].stock.length);
    console.log(newBoard.stockNumber);
    $(`#boards${number}`).append(`<section id='${newBoard.stockNumber}section'>
    <li class='list-group-item board${newBoard.stockNumber}class'><h4>Stock #${newBoard.stockNumber}:<h4></li>
    <li class='list-group-item bg-secondary text-light board${newBoard.stockNumber}class' id='board${newBoard.stockNumber}length'>Length: ${newBoard.length}</li>
    <li class='list-group-item board${newBoard.stockNumber}class' id='board${newBoard.stockNumber}width'>Width: ${newBoard.width}</li>
    <li class='list-group-item bg-secondary text-light board${newBoard.stockNumber}class' id='board${newBoard.stockNumber}thickness'>Thickness: ${newBoard.thick}</li>
    <li class='list-group-item board${newBoard.stockNumber}class' id='board${newBoard.stockNumber}planed'>Planed: ${newBoard.planed}</li>
    <button onclick='$("#${newBoard.stockNumber}section").remove()' class='btn btn-danger'>Delete Board</button></section>
    `);
    speciesTable[currentSpecies].stock.push(newBoard);
}


