import React, { Component } from 'react';
import NumberForm from './NumberForm'

const getNumber = (number) => (number.number)

export default class Fibonacci extends Component {
    state = {
        number: undefined
    }

    getFibonacciOfNumber = (num) => {
        let state = {...this.state}
        num = Object.values(num)[0]
        if(num <= 1) {
            state.number = (num)
            this.setState(state)
        }
        else {
            state.number = ((num - 2 )+ (num -1))
            this.setState(state)
        }   
        
    }

    render = () => (
        <div>
            <h1>Fibonacci Sequence</h1>
            {getNumber(this.state)}
            <NumberForm fibonacciSolution={this.getFibonacciOfNumber} />
        </div>
    )
}