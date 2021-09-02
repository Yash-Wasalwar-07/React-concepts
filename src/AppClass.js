import React, { Component } from 'react'

export default class AppClass extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        }
    }

    increment = () => {
        this.setState((previousState) => ({
            count: previousState.count + 1
        }))
    }

    decrement = () => {
        this.setState((previousState) => ({
            count: previousState.count - 1
        }))

    }


    render() {
        return (
            <div>
                <h1>Welcome to my counter</h1>
                <h3>count : {this.state.count}</h3>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.increment}>+</button>
            </div>
        )
    }
}
