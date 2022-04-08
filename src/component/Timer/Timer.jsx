import React, { Component } from 'react'
import '../MyProfile/Profile.style.css'

export class Timer extends Component {

    state ={
        count: 0
    }

    intervalId = null;

    decriment = ()=>{
        if(this.state.count > 0){
            this.setState({
                count: this.state.count - 1
            })
        }
    }

    incriment = ()=>{
        this.setState({
            count: this.state.count + 1
        })
    }



    startTimer = () => {
        if(this.state.count > 0 && !this.intervalId){
            this.intervalId = setInterval(()=>{
                this.setState({count: this.state.count - 1 }, ()=>{
                    if(this.state.count === 0){
                        alert('Timer Finished')
                        clearInterval(this.intervalId)
                        this.intervalId  = null;
                    }
                })
            }, 1000)
        }
    }

    stopTimer = ()=>{
        if(this.intervalId){
            clearInterval(this.intervalId)
            this.intervalId = null
        }
    }

    resetTimer = () => {
        this.setState({count: 0})
        clearInterval(this.intervalId)
        this.intervalId = null;
    }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
          <h1>Set Time Out</h1>
          {/* <h2>Count: {this.state.count}</h2> */}
          <button onClick={this.decriment} className='Btn'>-</button>
          <span className='Text'>{this.state.count}</span>
          <button onClick={this.incriment} className='Btn'>+</button>
          <div>
              <button onClick={this.startTimer} className='Btn-b'>Start</button>
              <button onClick={this.stopTimer} className='Btn-b'>Stop</button>
              <button onClick={this.resetTimer} className='Btn-b'>Reset</button>
          </div>

      </div>
    )
  }
}

export default Timer;