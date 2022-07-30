import React from "react";
import { useState, useEffect } from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

export default function AreaList (props) {
    let { areas } = props; 
    return (
        <ul>
            {areas.map((area, index) => {
                return <li className="list-group" key={index}><Card className="carded"><NavLink className="p-2 text-decoration-none text-dark" to={area.name}>{area.name}</NavLink></Card></li>
            })}
        </ul>
    )
}