import React, { Component } from 'react';
import range from 'lodash.range';

const Stars = (props) => {
    return (
        <div className="col-5">
            {range(props.numberOfStars).map(i =>
                <i key={i} className="glyphicon glyphicon-star"></i>)}
        </div>
    )
}

export default Stars;