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


    resetArray(){
        const array = [];
        for (let i=0; i<100;i++) {
            array.push(randomIntFromInterval(5, 1000));
        }
        this.setState({array});
    }

    render(){
        const {array} = this.state

        return (
        <>
        
            {array.map((value, idx)=> (
                <div className='array-bar' key={idx}>
                    {value}
                </div>
            ))}

        </>
        );
    }

}

//generate random number
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max-min + 1) + min);
}

export default SortingVisualizer;