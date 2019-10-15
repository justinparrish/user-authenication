import React, { Component } from 'react';

const getnumber = (number) => (number.number)



class FibonacciInput extends Component {
    state = {
        number: Number
    }

    handleInput = (evnt) => {
        let state = { ...this.state }

        state[evnt.target.name] = evnt.target.value

        this.setState(state)
    }

    handleSubmit = (evnt) => {
        evnt.preventDefault()

        this.props.fibonacciSolution(this.state)
    }

    render = () => (
        <form onSubmit={this.handleSubmit}>
            <input type='number' name='number' placeholder='What number do you want to use?' onChange={this.handleInput} />
            <input type='submit' value='Get Answer' />
        </form>
    )
}



export default class Fibonacci extends Component {
    state = {
        number: 0
    }

    getFibonacciOfNumber = (num) => {
        num = Object.values(num)[0]

        let state = {...this.state}

        if(num <= 1) {
            return console.log(num )
        }
        else {
            state.number = ((num - 2 )+ (num -1))
            this.setState(state)
        }


        
        
    }

    render = () => (
        <div>
            <h1>Fibonacci Sequence</h1>
            {getnumber(this.state)}
            <FibonacciInput fibonacciSolution={this.getFibonacciOfNumber} />

        </div>
    )
}