$('#create-new-house').on('click', () => {
    HouseService.createHouse($('#new-house-name').val());
    $('#new-house-name').val("");
    DOMManager.getAllHouses();
}
);


class House {
    constructor(name) {
        this.name = name;
        this.rooms = [];
    }
    addRoom(name, area) {
        this.rooms.push(new Room(name, area));
    }
}

class Room {
    constructor(name, area) {
        this.name = name;
        this.area = area;
    }
}

class HouseService { 
    static url = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

    static getAllHouses() {
        return $.get(this.url);
    }

    static getHouse(id) {
        return $.get(this.url + `/${id}`);
    }

    static createHouse(house) {
        let newHouse = new House(house);
        return $.post(this.url, newHouse);
    }

    static updateHouse(house) {
        return $.ajax(
            {
                url: this.url + `/${house._id}`,
                //underscore id because that's the id the database MongoDB use
                dataType: 'json',
                data: JSON.stringify(house),
                contentType: 'application/json',
                type: 'PUT'
            }
        )
    }

    static deleteHouse(id) {
        return $.ajax(
            {
                url: this.url + `/${id}`,
                type: 'DELETE'

            }
        );

    }


}

class DOMManager {
    static houses;

    static getAllHouses() {
        HouseService.getAllHouses().then(houses => this.render(houses));
    }
    static addRoom(id) {
        for (let house of this.houses) {
            if (house._id == id) {
                house.rooms.push(new Room($(`#${house._id}-room-name`).val(), $(`#${house._id}-room-area`)));
                HouseService.updateHouse(house)
                    .then(() => {
                        return HouseService.getAllHouses();
                    })
                    .then((houses) => this.render(houses));
            }

        }
    }
    static render(houses) {
        this.houses = houses;
        $('#app').empty();
        for (let house of houses) {
            $('#app').prepend(
                `<div id='${house._id}' class="card">
                    <div class="card-header">
                        <h2>${house.name}</h2>
                        <button class='btn btn-danger houseDeleter' onclick="DOMManager.deleteHouse('${house._id}')">Delete</button>
                    </div>
                    <div class='card-body'>
                        <div class='card'>
                            <div class='row'>
                                <div class='col-sm'>
                                    <input type='text' class='form-control' id='${house._id}-room-name' placeholder='new room name'>
                                </div>
                                <div class='col-sm'>
                                    <input type='text' class='form-control' id='${house._id}-room-area' placeholder='new room area'>
                                </div>
                                
                            </div>
                            <button id='${house._id}-new-room' onclick="DOMManager.addRoom('${house._id}', '${house._id}-room-name','${house._id}-room-area')" class='btn btn-primary form-control'>Add Room</button>
                        </div>
                    </div>
                </div><br>`
            );

            for (let room of house.rooms) {
                $(`#${house._id}`).find('.card-body').append(
                    `<p>
                        <span id='name-${room._id}'>Name: ${room.name} </span>
                        <span id='name-${room._id}'>Area: ${room.area} </span>
                        <button class='btn btn-danger form-control' onclick='DOMManager.deleteRoom('${house._id}, '${room._id}')>Delete Room</button>
                    </p>`    
                )
            }
        }
    }

    static deleteHouse(house){
        HouseService.deleteHouse(house);
        $(`#${house}`).remove();
    }

    // static addRoom(house, name, area) {
    //     house.rooms.push(new Room(name, area));
    //     DOMManager.getAllHouses();
    // }
}



window.onload = (event) => {
    DOMManager.getAllHouses();
};

