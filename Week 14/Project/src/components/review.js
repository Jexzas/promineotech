import React from "react";

export default class Review extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div className="card">
                 <div className="card-body">
                    {this.props.reviewText}
                </div>
            </div>
        )

    }
}