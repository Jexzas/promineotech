// this class is the blueprint to define the items on the shopping list

class Item {
    constructor(item, quantity, budgetPrice, hasCoupon) {
        this.itemName = item;
        this.quantity = quantity;
        this.budgetPrice = budgetPrice;
        this.hasCoupon = hasCoupon;   
    }


}


// this class is the blueprint for shopping lists in general
class List {
    constructor(storeName) {
        this.storeName = storeName;
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
}

let tempArray = [];

function mainMenu () {
    return prompt('1.) Manage Items\n2.) Manage Lists\n3.) Exit');


}

function itemMenu () {
    return prompt('1.) Create Item\n2.) Remove item\n3.) Add item to existing list\n4.) Go Back');    
}

function listMenu () {
    return prompt('1.) Create list\n2.) Remove list\n3.) Edit list\n4.) Go Back');
    handleItemSelection();
}

function createItem() {
    while(true) {
    const item = new Item(
        prompt('Enter item name: '),
        prompt('How many do you want? '),
        prompt('What is the budget for this item?'),
        prompt('Do we have any coupons?')
    )
    tempArray.push(item);
    console.log(tempArray);
    let userContinue = prompt('Do you want to add another item y/n?');
    if (userContinue == 'n') {
        break;
    }

    }
}

function removeItem() {
    let str = '';
    for ( let i = 0; i < tempArray.length; i++) {
        str += i + 1 + ") " + tempArray[i] + "\n";
    }
    let itemToRemove = prompt("Which item do you want to delete? ");
    console.log(itemToRemove);
}

function handleItemSelection(selection) {
    switch(selection) {
        case '1':
            createItem();
            break;
        case '2': 
            removeItem();
            break;
        case '3': 

        case '4':
    }
}




let userSelection = mainMenu();
switch(userSelection) {
    case '1':
        let itemSelection = itemMenu();
        handleItemSelection(itemSelection);
        break;
    case '2':
        listmenu();
        break;
    default: 
        exitMenu();
}