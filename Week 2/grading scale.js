var grade = prompt("What percent did you get on the test?");
// grade = parseInt(grade);
var gscore; 
switch (true) {
    case (grade >= 90 && grade <= 100):
        gscore = 'A';
        break;
    case (grade >= 80 && grade < 90):
        gscore = 'B';
        break;
    case (grade >= 70 && grade < 80):
        gscore = 'C';
        break;
    case (grade >= 60 && grade < 70):
        gscore = 'D';
        break;
    case (grade >= 0 && grade <= 59):
        gscore = 'F';
        break;
    default:
        gscore = `${grade}??? That's not even an option`;
        break;
}

document.open();
document.write(`<h1 id="uhoh">Congratulations! You got a dang ${gscore}!</h1>`);
if (gscore == 'A') {
    let h1 = document.getElementById("uhoh");
    h1.setAttribute("style", "font-size: 10rem; color: red; text-transform: uppercase;");
    let body = document.body;
    body.setAttribute("style", "background-color: black;");
} else {
    body.setAttribute("style", "background-color: white;");
}
document.close();


var a = 16;
var b = 10;
if (a < 20) {
    if (b < a) {
        alert("Time to buy some B!");
    } else {
        alert("Time to buy some A!");
    }
} else {
    alert("You probably shouldn't");
}