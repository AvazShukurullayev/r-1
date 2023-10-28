import React from 'react';

const MovieCard = ({movie}) => {
    return (
        <div className="my-3 col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
            <div className="card">
                <div className="card-header">
                    <h3 className="text-center text-wrap">{movie.title}</h3>
                </div>
                <div className="card-body text-center">
                    <img src={movie.src} className="img-fluid w-100 h-100" alt={movie.title}/>
                </div>
                <div className="card-footer">
                    <p>Liked: {movie.liked}% ❤️</p>
                    <p>Released: {movie.released}</p>
                </div>
            </div>
        </div>

    );
};

export default MovieCard;