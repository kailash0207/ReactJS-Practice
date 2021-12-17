import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {mode: 'Dark'}

  changeMode = () => {
    this.setState(prevState => ({
      mode: prevState.mode === 'Dark' ? 'Light' : 'Dark',
    }))
  }

  render() {
    const {mode} = this.state
    let container = 'dark-mode-container'
    let heading = 'dark-mode-heading'
    let button = 'dark-mode-button'
    let buttonText = 'Light'
    if (mode === 'Light') {
      container = 'light-mode-container'
      heading = 'light-mode-heading'
      button = 'light-mode-button'
      buttonText = 'Dark'
    }

    return (
      <div className="bg-container">
        <div className={`${container} container`}>
          <h1 className={`${heading} heading`}>Click To Change Mode</h1>
          <button
            type="button"
            className={`${button} button`}
            onClick={this.changeMode}
          >{`${buttonText} Mode`}</button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
