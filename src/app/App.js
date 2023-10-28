import React from 'react';
import KeeperApp from "../keeper-app/KeeperApp";
import TimeFunc from "../time-functionality/TimeFunc";
import MovieProps from "../movie-props/MovieProps";
import Movies from "../movies/Movies";


const App = () => {
    return (
        <div className="app font-monospace">
            <h1 className="py-3 mb-4 text-center text-danger bg-dark">Keeper app</h1>
            <KeeperApp/>
            <h1 className="py-3 my-4 text-center text-danger bg-dark">Time functionality</h1>
            <TimeFunc/>
            <h1 className="py-3 my-4 text-center text-danger bg-dark">Movie props</h1>
            <MovieProps/>
            <h1 className="py-3 my-4 text-center text-danger bg-dark">Movies</h1>
            <Movies/>
        </div>
    );
};

export default App;