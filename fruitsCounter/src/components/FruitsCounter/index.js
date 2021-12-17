/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-labels */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-labels */
/* eslint-disable react/no-unused-state */
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {banana: 0, mango: 0}

  eatBanana = () => {
    this.setState(prevState => ({
      banana: prevState.banana + 1,
    }))
  }

  eatMango = () => {
    this.setState(prevState => ({
      mango: prevState.mango + 1,
    }))
  }

  render() {
    return (
      <div className="bg-container">
        <div className="fruits-counter-container">
          <h1 className="heading">
            Bob ate <span className="count">{this.state.mango}</span> mangoes{' '}
            <span className="count">{this.state.banana}</span> bananas
          </h1>
          <div className="fruits-container">
            <div className="fruit-container">
              <img
                className="fruit-image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button type="button" className="button" onClick={this.eatMango}>
                Eat Mango
              </button>
            </div>
            <div className="fruit-container">
              <img
                className="fruit-image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button type="button" className="button" onClick={this.eatBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
