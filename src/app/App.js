import React from 'react';
import KeeperApp from "../keeper-app/KeeperApp";
import TimeFunc from "../time-functionality/TimeFunc";


const App = () => {
    return (
        <div className="app font-monospace">
            <KeeperApp/>
            <TimeFunc />
        </div>
    );
};

export default App;