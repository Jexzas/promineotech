let id = 0;

document.getElementById('p-button').addEventListener('click', getInputData);

function getInputData() {
    let userParagraph = document.getElementById('p-input').value;
    // console.log(userParagraph);
    let newParagraph = document.createElement('p');
    newParagraph.innerHTML = userParagraph;
    newParagraph.id = id;
    document.getElementById('p-div').appendChild(newParagraph);
    id++;
    document.getElementById('p-input').value = '';
}