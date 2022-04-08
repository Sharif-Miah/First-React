import React, { Component } from "react";
import '../state/state.style.css'



class MyState extends Component{

    state ={
        count: 0
    }

intervalId = null;

    incrimentTimer = ()=> {
        this.setState({count: this.state.count + 1})
    }
    decrimentTimer = ()=> {
        if(this.state.count > 0){
            this.setState({count: this.state.count - 1})
        }
    }


  startTimer = () => {
      if(this.state.count > 0){
        this.intervalId = setInterval(()=>{
            this.setState({count: this.state.count - 1},()=>{
                if(this.state.count === 0){
                    alert('Timer Finished')
                    clearInterval(this.intervalId)
                    this.intervalId = null;
                }
            })
        }, 1000)
      }
  }


  stopTimer = () => {
      if(this.intervalId){
        clearInterval(this.intervalId)
        this.intervalId = null;
      }
  }

  resetTimer = () => {
      this.setState({count: 0})
      clearInterval(this.intervalId)
      this.intervalId = null;
  }

    render(){
        return(
            <div className="Container">
                <h1 className="Heading">Simple Timer</h1>
                <button className="Btn" onClick={this.decrimentTimer}>-</button>
                <span className="text">{this.state.count}</span>
                <button className="Btn" onClick={this.incrimentTimer}>+</button>
                <div>
                    <button className="Btn" onClick={this.startTimer}>Start</button>
                    <button className="Btn" onClick={this.stopTimer}>Stop</button>
                    <button className="Btn" onClick={this.resetTimer}>Reset</button>
                </div>

            </div>
        )
    }
}

export default MyState;