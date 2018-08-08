import React, { Component } from 'react';
import range from 'lodash.range';

const Stars = (props) => {
    const numberOfStars = 1 + Math.floor(Math.random()*9);
    
    return (
        <div className="col-5">
            {range(numberOfStars).map(i =>
                <i key={i} className="glyphicon glyphicon-star"></i>)}
        </div>
    )
}

export default Stars;