let myString = `I literally 
did not know that
you could do this
who knew?`;

//arrow functions
const createFullName = (firstName, lastName) => firstName + ' ' + lastName;
const someFunction = (a, b) => {
    return a + b;
}

const functionResult = (text) => {
    i = 0;
    do {
        console.log(text);
        i ++;
    } while (i < 10);
}
let userName;
function getUserName(){
    userName = prompt("User name?")
    dealWithUser();
}
    ;
const logUserName = (user) => console.log(user);
 

const newPromise = () => {
    getData()
        .then(
         (response) => response.json()
        )
        .then(
            (response) => console.log(response)
        )
        .catch(
            console.error('Something broke')
        )
        .finally(console.log('program is finished'))
}

function getData () {
    return fetch(`http://google.com`);
}