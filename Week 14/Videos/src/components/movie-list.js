import React from "react";
import Movie from './movie';

let counter = 0;

export default class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        };
        this.addMovie = this.addMovie.bind(this);
    }
    render () {
        return (
            <div className='container' id='movieList'>
                <div className="form-group">
                    <input placeholder="Movie Title" id="title"/>
                    <input placeholder="Review Rating (1-5)" id="rating"/>
                    <input placeholder="Text review" id="reviewText"/>
                    <button onClick={this.addMovie} className='form-control btn btn-secondary'>Submit</button>
                </div>
                <div className="col-sm" id='actualList'>
                    <ul className='list-group' id='listTarget'>

                    </ul>
                </div>
            </div>
        );
    }
    addMovie () {
        let title = document.getElementById('title').value;
        let rating = document.getElementById('rating').value;
        let review = document.getElementById('reviewText').value;
        this.state.movies.push(<Movie title={title} rating={rating} review={review} id={counter}/>);
        document.getElementById('listTarget').append(<li>{this.state.movies[counter]}</li>);
        counter ++;
    }
}