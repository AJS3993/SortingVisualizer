import React from 'react';
import './SortingVisualizer.css';
import {getMergeSortAnimations} from '../SortingAlgorithms/SortingAlgorithms.js';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

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
            array.push(randomIntFromInterval(5, 500));
        }
//resets the state to have this new array
        this.setState({array});
    }

    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const isColorChange = i % 3 !== 2;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);
          }
        }
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
            <button onClick={() => this.mergeSort()}>Merge Sort</button>
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