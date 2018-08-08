import React, { Component } from "react";
import _ from 'lodash.range';

const Numbers = (props) => {
    const arrayOfNumbers = _.range(1, 9);
    return (
        <div className="card text-center">
            <div>
               {arrayOfNumbers.map((number, i) => 
            <span key={i}>{number}</span>
                )}
            </div>
        </div>
    );
};

export default Numbers;