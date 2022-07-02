import React from "react";

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

    };
    handleClick() {
        this.props.onClick(this.props.name);
    };
    render () {
        return (
            <button className="btn btn-primary form-control m-1" 
            onClick={this.handleClick}> {this.props.name} Counter {this.props.count}</button>
        );
    };
    
}