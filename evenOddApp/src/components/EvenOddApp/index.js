/* eslint-disable react/destructuring-assignment */
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.floor(Math.random() * 101),
    }))
  }

  render() {
    return (
      <div className="bg-container">
        <div className="counter-container">
          <h1 className="count-heading">Count {this.state.count}</h1>
          <p className="even-odd-message">
            Count is {this.state.count % 2 === 0 ? 'Even' : 'Odd'}
          </p>
          <button
            className="button"
            type="button"
            onClick={this.incrementCount}
          >
            Increment
          </button>
          <p className="message">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
