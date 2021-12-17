import {Component} from 'react'

import Logout from '../Logout'
import Login from '../Login'
import Message from '../Message'

import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  onClick = () => {
    this.setState(prevState => ({
      isLoggedIn: !prevState.isLoggedIn,
    }))
  }

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="bg-container">
        <div className="login-container">
          <Message isLoggedIn={isLoggedIn} />
          {isLoggedIn ? (
            <Logout logout={this.onClick} />
          ) : (
            <Login login={this.onClick} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
