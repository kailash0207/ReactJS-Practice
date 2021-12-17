import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {phrase: ''}

  onChange = event => this.setState({phrase: event.target.value})

  render() {
    const {phrase} = this.state

    return (
      <div className="bg-container">
        <div className="letters-counter-container">
          <div className="counter-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-container">
              <label htmlFor="input" className="message">
                Enter the phrase
              </label>
              <input
                className="input"
                type="text"
                value={phrase}
                onChange={this.onChange}
                placeholder="Enter the phrase"
                id="input"
              />
            </div>
            <p className="letters-count">No.of letters: {phrase.length}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="img"
          />
          >
        </div>
      </div>
    )
  }
}

export default LettersCalculator
