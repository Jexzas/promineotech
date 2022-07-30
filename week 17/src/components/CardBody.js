import React from "react";

function CardBody(props) {
    return (
        <div className="card=body">
            <p className="card-text">
                Click Count: {props.count}
            <button onClick={props.handleIncrement} className="m-1 btn btn-primary">
                Increment
            </button>
            <button onClick={props.handleDecrement} className="m-1 btn btn-success">
                Decrement
            </button>
            </p>
        </div>
    )
}

export default CardBody;