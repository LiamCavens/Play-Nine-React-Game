import React, { Component } from 'react';


const Stars = (props) => {
    const numberOfStars = 1 + Math.floor(Math.random()*9);

    let stars = [];

    for (let i = 0; i < numberOfStars ; i++) {
        stars.push(<i key={i} className="glyphicon glyphicon-star"></i>)
    }

    return (
        <div className="col-5">
            {stars}
        </div>
    )
}

export default Stars;