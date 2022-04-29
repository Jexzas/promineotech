function goodGreet(name) {
    alert(`Welcome, ${name}`);
}

function badGreet(name) {
    alert(`Get outta here, ${name}`);
}

function unknown(name) {
    alert(`I haven't heard that one before, ${name}. Probably better leave.`);
}


const dealWithUser = () => {
    switch (true) {
        case (userName == "Jimmy"):
            goodGreet(userName);
            break;
        case (userName == "Jammy"):
            badGreet(userName);
            break;
        case (userName == "Jommy"):
            badGreet(userName);
            break;
        case (userName == "Jeemy"):
            badGreet(userName);
            break;
        case (userName == "Jamey"):
            badGreet(userName);
            break;
        case (userName == "Jamie"):
            badGreet(userName);
            break;
        case (userName == "Jami"):
            goodGreet(userName);
            break;
        case (userName == "Jamise"):
            unknown(userName);
            break;
        default:
            unknown(userName);
    }
}
