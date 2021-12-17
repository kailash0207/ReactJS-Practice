/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  accelerate = () => {
    this.setState(prevState => {
      if (prevState.speed + 10 > 200) {
        return {speed: 200}
      }
      return {speed: prevState.speed + 10}
    })
  }

  applyBrake = () => {
    this.setState(prevState => {
      if (prevState.speed - 10 < 0) {
        return {speed: 0}
      }
      return {speed: prevState.speed - 10}
    })
  }

  render() {
    return (
      <div className="bg-container">
        <div className="speedometer-container">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            className="img"
            alt="speedometer"
          />
          <h1 className="speed">Speed is {this.state.speed}mph</h1>
          <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="button-container">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.accelerate}
            >
              Accelerate
            </button>
            <button
              type="button"
              className="btn btn-outline"
              onClick={this.applyBrake}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
