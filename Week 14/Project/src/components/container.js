import React from "react";
import Review from './review';
import MovieList from './movie-list';
import ReviewForm from './review-form';
import Movie from './movie';

export default class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render () {
        return (
            <div className="container-fluid m-0">
                <div className="container-fluid navbar-nav navbar bg-dark text-white ">MoviesTime</div>
                <div className="container-fluid row">
                    <MovieList movies={this.state.movies} addMovie={this.addMovie}/>
                </div>
            </div>
        )
    }
}