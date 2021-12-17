/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unused-state */
/* eslint-disable lines-between-class-members */
/* eslint-disable no-unused-vars */
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {clickCount: 0}
  incrementClick = () => {
    this.setState(prevState => ({clickCount: prevState.clickCount + 1}))
  }
  render() {
    return (
      <div className="bg-container">
        <div className="counter-container">
          <h1 className="heading">
            The Button has been clicked{' '}
            <span className="count">{this.state.clickCount}</span> times
          </h1>
          <p className="message">Click the button to increase the count!</p>
          <button className="click-me-btn" onClick={this.incrementClick}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}
export default ClickCounter
