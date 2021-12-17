import './index.css'

const DenominationItem = props => {
  const {withdraw, denomination} = props
  const onClickWithdraw = () => {
    withdraw(denomination.value)
  }
  return (
    <li className="denomination">
      <button className="button" type="button" onClick={onClickWithdraw}>
        {denomination.value}
      </button>
    </li>
  )
}

export default DenominationItem
