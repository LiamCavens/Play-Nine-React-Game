import React, { Component } from "react";
import Stars from './Stars';
import Button from './Button';
import Answer from './Answer';
import Numbers from './Numbers';

export default class Game extends Component {
  render() {
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <div className="row">
            <Stars />
            <Button />
            <Answer />
        </div>
        <br/>
        <Numbers />
      </div>
    );
  }
}
