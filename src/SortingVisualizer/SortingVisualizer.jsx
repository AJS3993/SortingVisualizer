import React from 'react';
import './SortingVisualizer.css';


export class SortingVisualizer extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {
            array: []
        };
    }

//lifecycle method that happens first
    componentDidMount(){
        this.resetArray();
    }


// creates array, generates 100 random numbers and pushes each into that array
    resetArray(){
        const array = [];
        for (let i=0; i<100;i++) {
            array.push(randomIntFromInterval(5, 1000));
        }
//resets the state to have this new array
        this.setState({array});
    }

    render(){
        const {array} = this.state
        
        return (
            <>
            <div className = 'array-container'>
                {array.map((value, idx)=> (
                    <div className='array-bar' 
                    key={idx}
                    style={{height: `${value}px`}}></div>
            ))}
            <button onClick={() => this.resetArray()}>Generate New Array</button>
            </div>
        </>
        );
    }
}

//generate random number
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max-min + 1) + min);
}

export default SortingVisualizer;