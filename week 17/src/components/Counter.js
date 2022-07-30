import React from "react";
import CardBody from "./CardBody";

import { connect } from "react-redux";

const Counter = ( { count, dispatch } ) => {
    const handleIncrement = (p) => {
        dispatch({
            type: 'INCREMENT'
        });
    }
    const handleDecrement = () => {
        dispatch({
            type: 'DECREMENT'
        });
    }

    return (
        <div className="card text-center">
            <div className="card-header bg-danger text-white">
                <h1>Click Counter!</h1>
            </div>
            <CardBody count={1} handleIncrement={handleIncrement} handleDecrement={handleDecrement}/>
        </div>
    )
}



export default connect()(Counter);