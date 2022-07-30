import React from "react";
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import { CallAPI } from "../rest/api";

export default function ItemList(props) {
    const { areas, fetchAreas } = props;
    const [ items, getItems ] = useState([]);
    const [ currentArea, setCurrentArea ] = useState('Home');

    let area = useLocation().pathname;
    let homePage = ['Select an area'];
    function determineAreaBasedOnCurrentLocation(area) {
        const thisArea = areas.filter((location) => {
           if (`/${location.name}` === area ) {
            return location;
           } 
        });
        return thisArea[0] ? thisArea[0] : 'Home';
    }
    useEffect(() => {
        console.log(area);
        setCurrentArea(determineAreaBasedOnCurrentLocation(area));
        currentArea !== "Home" ? getItems(currentArea.items) : getItems(homePage);
        console.log(currentArea);
    });

    const updateArea = async (updatedArea) => {
        await CallAPI.put(updatedArea);
        fetchAreas();
    }

    const deleteItem = (itemId) => {
        const updatedArea = {
            ...currentArea, items: currentArea.items.filter((x) => x.id !== itemId)
        }
        updateArea(updatedArea);
    }

    if (currentArea.name !== 'Home') {
        return (
            <ul className="list-group">
                {items.map((item, index) => {
                    return <Item  deleteItem={deleteItem} key={index} item={item} ></Item>
                })}
            </ul>
    
        )
    } else {
        return (
            <ul className="list-group">
                {items.map((item, index) => {
                    return <li className="list-group-item list-group-item-info" key={index}><h3 className="items">{item}</h3></li> 
                })}
            </ul>
        )
    }


}

function Item(props) {
    const { item, key } = props;
    return (
        <li className="list-group-item list-group-item-info"><h2 className="items">{item} </h2><DeleteButton deleteItem={props.deleteItem} index={key}/></li>
    )
}

function DeleteButton(props) {
    return (
        <Button variant="danger" onClick={(e) => props.deleteItem(props.index)}>Delete</Button>
    )
}