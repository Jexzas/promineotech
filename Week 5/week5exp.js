class Cars {


}

class Volkswagens {
    make = "Volkswagen"
    constructor(year, color, engine) {
        year = this.year;
        color = this.color;
        engine = this.engine;
    }
}

class Jetta extends Volkswagens {
    constructor(year, color, engine) {
        super(year, color, engine);
        this.model = "Jetta";

    }
    
}

class Beetle extends Volkswagens {
    constructor(year, color, engine) {
        super(year, color, engine);
        model = "Beetle";
    }

}

class Golf extends Volkswagens {
    constructor(year, color, engine) {
        super(year, color, engine);
        model = "Golf";
    }
}




class Bus extends Volkswagens {
    constructor(year, color, engine) {
        super(year, color, engine);
        model = "Bus";
    }
}





