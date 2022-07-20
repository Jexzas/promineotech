import React from 'react';

const ReviewForm = props => {
    return (
        <div className="card">
            <div className="card-header">Leave a review!</div>
            <div className="card-body">
                <input className="form-control" placeholder="review body" id='reviewText'></input>
                <button className="form-control btn btn-primary" onClick={props.addReview}>Submit</button>
            </div>
        </div>
    )

};

export default ReviewForm;