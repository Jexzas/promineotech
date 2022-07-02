import React from "react";

export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.title = '';
        this.reviews = [];
        this.ratings = [];
        this.id = null;
    }
    render() {
        return (
            <div className="card w-75">

            </div>
        )
    }
    review() {

    }
}