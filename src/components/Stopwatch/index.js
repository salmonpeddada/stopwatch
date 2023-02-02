// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    seconds: 0,
    isTimerRunning: false,
  }

  displayTimer = () => {
    const {seconds} = this.state
    const minutesIn = Math.floor(seconds / 60)
    const secondsIn = Math.floor(seconds % 60)
    const displayMinutes = minutesIn > 9 ? minutesIn : `0${minutesIn}`
    const displaySeconds = secondsIn > 9 ? secondsIn : `0${secondsIn}`
    return `${displayMinutes}:${displaySeconds}`
  }

  addSeconds = () => {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1,
    }))
  }

  startOrStopFunction = () => {
    const {isTimerRunning} = this.state
    if (!isTimerRunning) {
      this.timerId = setInterval(() => {
        this.addSeconds()
      }, 1000)
    } else {
      clearInterval(this.timerId)
    }
  }

  startTimer = () => {
    this.setState(prevState => ({
      isTimerRunning: !prevState.isTimerRunning,
    }))
    this.startOrStopFunction()
  }

  stopTimer = () => {
    this.setState(prevState => ({
      isTimerRunning: !prevState.isTimerRunning,
    }))
    this.startOrStopFunction()
  }

  resetTimer = () => {
    clearInterval(this.timerId)
    this.setState({
      seconds: 0,
      isTimerRunning: false,
    })
  }

  render() {
    const {isTimerRunning} = this.state
    return (
      <div className="stopwatch-bg-container">
        <h1 className="main-heading">Stopwatch</h1>
        <div className="timer-container">
          <div className="timer-heading-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="timer-logo"
            />
            <p className="timer-heading">Timer</p>
          </div>
          <h1 className="timer" data-testid="timer">
            {this.displayTimer()}
          </h1>
          <div className="buttons-container">
            <button
              type="button"
              className="button start-button"
              onClick={this.startTimer}
              disabled={isTimerRunning}
            >
              Start
            </button>
            <button
              type="button"
              className="button stop-button"
              onClick={this.stopTimer}
              disabled={!isTimerRunning}
            >
              Stop
            </button>
            <button
              type="button"
              className="button reset-button"
              onClick={this.resetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
