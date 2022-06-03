

document.getElementById('userSubmit').addEventListener('click', () => {
    let currentDate = new Date(Date.now());
    let rapperName = document.getElementById('userInput1').value;
    let bestAlbum = document.getElementById('userInput2').value;
    let worstAlbum = document.getElementById('userInput3').value;
    let dateFiled = `${currentDate.getMonth()}-${currentDate.getDate()}-${currentDate.getFullYear()}`;
    populateTable(rapperName, bestAlbum, worstAlbum, dateFiled);
});


function populateTable(name, album, album2, date) {
    let table = document.getElementById('userTable');
    let row = table.insertRow(1);
    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = album;
    row.insertCell(2).innerHTML = album2;
    row.insertCell(3).innerHTML = date;
}
