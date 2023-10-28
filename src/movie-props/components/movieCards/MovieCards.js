import React from 'react';
import {MovieCard} from "../index";

const MovieCards = () => {
    return (
        <div className="movie__card">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <MovieCard title="The Social Network"
                                   src="https://picsum.photos/id/5/200/300"
                                   liked="90%"
                                   release="1 October, 2010"/>
                        <div className="col">
                            <MovieCard title="Iron man" src="https://picsum.photos/id/1/200/300" liked="84%"
                                       release="28 July, 2006"/>
                        </div>
                        <div className="col">
                            <MovieCard title="The Avatar II" src="https://picsum.photos/id/2/200/300"
                                       liked="99%" release="22 december, 2022"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCards;