import React from 'react';
import KeeperApp from "../keeper-app/KeeperApp";
import TimeFunc from "../time-functionality/TimeFunc";
import MovieProps from "../movie-props/MovieProps";
import Movies from "../movies/Movies";


const App = () => {
    return (
        <div className="app font-monospace">
            <KeeperApp/>
            <TimeFunc />
            <MovieProps />
            <Movies />
        </div>
    );
};

export default App;