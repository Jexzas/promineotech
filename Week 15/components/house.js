import React, { useState } from 'react';
import RoomForm from './roomForm';

const House = (props) => {
    const { house, updateHouse } = props;

    const deleteRoom = (roomId) => {
        const updatedHouse = {
            ...house, rooms: house.rooms.filter((x) => x.id !== roomId)
        };
        updateHouse(updatedHouse);
    }

    const addNewRoom = (room) => {
        return updateHouse({ ...house, rooms: [...house.rooms, room]});
    }

    const rooms =
        <ul>
            {house.rooms.map((room, index) => {
                return (<li key={index}>
                        <h1> {`${room.name}, area: ${room.area}`}</h1>
                        <button onClick={(e) => deleteRoom(room._id)}>Delete</button>
                    </li>)
            })}
        </ul>;

    return (
        <div className='card bg-dark text-white'>
            <div className='card-header'><h1>{house.name}</h1></div>
            <div className='card-body bg-success text-dark'>
                {rooms}
            </div>
            <div className='card-footer'>
                <RoomForm addNewRoom={addNewRoom}/>
            </div>
        </div>
    )
}

export default House;