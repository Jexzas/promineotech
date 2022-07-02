import React from "react";
import Review from "./review";


export default class Movie extends React.Component {
    constructor(props) 
    {
        super(props);
        this.state = {
            reviews: props.reviews
        }
    }

    render() {
        let reviewsArray = [];
        let counter = 0;
        for (let review of this.state.reviews) {
            reviewsArray.push(<li key={counter}><Review reviewText={review} key={counter}/></li>);
            counter++;
        }; 
        return (
            <div className="card bg-secondary">
                <div className="card-header bg-success">{this.props.title}</div>
                <div className="card-body bg-primary">
                    
                    <p>{this.props.synopsis}</p>
                    <h5>Reviews:</h5>
                    <ul>{reviewsArray}</ul>
                </div>
            </div>
        )
    }
}
