import React from 'react';
import {MovieCard, moviesData} from "../index";

const MovieCards = () => {
    return (
        <div className="movie__cards">
            <div className="container">
                <div className="row">
                    {moviesData ? moviesData.map((movie, index) => <MovieCard key={index} movie={movie}/>) : ""}
                </div>
            </div>
        </div>
    );
};

export default MovieCards;