import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirstnameHidden: true, isLastnameHidden: true}

  showHideFirstname = () => {
    this.setState(prevState => ({
      isFirstnameHidden: !prevState.isFirstnameHidden,
    }))
  }

  showHideLastname = () => {
    this.setState(prevState => ({
      isLastnameHidden: !prevState.isLastnameHidden,
    }))
  }

  render() {
    const {isFirstnameHidden, isLastnameHidden} = this.state
    const firstname = isFirstnameHidden ? null : <p className="name">Joe</p>
    const lastname = isLastnameHidden ? null : <p className="name">Jonas</p>
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="names-container">
          <div className="name-container">
            <button
              className="button"
              type="button"
              onClick={this.showHideFirstname}
            >
              Show/Hide Firstname
            </button>
            {firstname}
          </div>
          <div className="name-container">
            <button
              className="button"
              type="button"
              onClick={this.showHideLastname}
            >
              Show/Hide Lastname
            </button>
            {lastname}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
