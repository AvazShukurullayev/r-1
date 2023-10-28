import React from 'react';

const MovieCard = ({title, src, liked, release}) => {
    return (
        <div className="card my-3">
            <div className="card-header">
                <h3 className="text-center">{title}</h3>
            </div>
            <div className="card-body text-center">
                <img
                    src={src}
                    className="img-fluid" alt={title}/>
            </div>
            <div className="card-footer">
                <p>Liked: {liked} ❤️</p>
                <p>Release date: {release}</p>
            </div>
        </div>
    );
};

export default MovieCard;