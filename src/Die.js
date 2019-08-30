import React, { Component } from 'react'
import './Die.css';

export class Die extends Component {
    render() {
        return (
            <i className={`Die fas fa-dice-${this.props.face} ${this.props.isRolling ? 'Die-wobble' : ''}`}></i>
        );
    }
}

export default Die;
