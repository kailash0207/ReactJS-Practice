import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  withDraw = value =>
    this.setState(prevState => ({
      balance: prevState.balance - value,
    }))

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    return (
      <div className="bg-container">
        <div className="cash-withdrawal-container">
          <div className="profile-container">
            <div className="profile-icon">
              <h1 className="name-first-letter">S</h1>
            </div>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="your-balance">Your Balance</p>
            <div className="balance-amount-container">
              <p className="balance">{balance}</p>
              <p className="currency">In Rupees</p>
            </div>
          </div>
          <div className="withdraw-container">
            <p className="withdraw">Withdraw</p>
            <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
            <ul className="denominations-list">
              {denominationsList.map(eachDenomination => (
                <DenominationItem
                  withdraw={this.withDraw}
                  denomination={eachDenomination}
                  key={eachDenomination.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
