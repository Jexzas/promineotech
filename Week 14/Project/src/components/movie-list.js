import React from "react";
import Movie from './movie';
import Review from "./review";
import ReviewForm from "./review-form";

export default class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.addReview = this.addReview.bind(this);
        this.state = {
            selectedFilm: ''
        }
        this.selectFilm = this.selectFilm.bind(this);
    }

    render() {


        return (
            <div>
                <ol id="target">
                    {movies.map((movie, index) => 
                          <Movie title={movie.title} synopsis={movie.synopsis} reviews={movie.reviews} key={index}/>
                    )}
                </ol>
                <h1>Leave a review</h1>
                <select id="selectedMovie" onChange={this.selectFilm}>
                    <option value="">Select</option>
                    <option value="30 Days of Night">30 Days of Night</option>
                    <option value="Avengers: Infinity War">Avengers: Infinity War</option>
                    <option value="Up">Up</option>
                    <option value="Frozen">Frozen</option>
                </select>
                <ReviewForm addReview={this.addReview}/>
            </div>
        )
    }
    selectFilm() {
        this.setState({
            selectedFilm: document.getElementById('selectedMovie').value
    })
    }
    addReview() {
        this.selectFilm();
        let reviewText = document.getElementById('reviewText').value;
        let chosenMovie = movies.filter(movie => movie.title === this.state.selectedFilm);
        chosenMovie[0].reviews.push(reviewText); 
        document.getElementById('reviewText').value = '';
    }
}

let movies = [
    {
        title: '30 Days of Night',
        synopsis: 'Vampires and Alaska are both actually gross.',
        reviews: []
    },
    {
        title: 'Avengers: Infinity War',
        synopsis: 'Medjool Date Goes On Killing Rampage',
        reviews: []
    },
    {
        title: 'Up',
        synopsis: 'Suicidal old man nearly takes child with him',
        reviews: []
    },
    {
        title: 'Frozen',
        synopsis: 'I have never actually seen this one',
        reviews: []
    }
]