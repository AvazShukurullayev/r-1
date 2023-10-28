import React from 'react';

const TodayComp = () => {
    const currentHour = new Date().getHours()
    let today = ""
    let customStyle = {
        color: ""
    }
    if (0 <= currentHour && currentHour <= 8) {
        today = "Good Morning"
        customStyle.color = "red"

    } else if (9 <= currentHour && currentHour <= 14) {
        today = "Good Afternoon"
        customStyle.color = "yellow"
    } else if (15 <= currentHour && currentHour <= 24) {
        today = "Good evening"
        customStyle.color = "blue"
    } else {
        today = "Something went wrong"
        customStyle.color = "dodgerblue"
    }
    return (
        <div className="today__comp">
            <div className="container">
                <h2 className="text-center my-3">Current hour is {currentHour}</h2>
                <h1 className="text-center my-3" style={customStyle}>{today}</h1>
            </div>
        </div>
    );
};

export default TodayComp;