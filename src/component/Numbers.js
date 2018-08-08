import React, { Component } from "react";
import range from 'lodash.range';

const Numbers = (props) => {
    const arrayOfNumbers = range(1, 10);
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