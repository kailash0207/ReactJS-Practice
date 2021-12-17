import './index.css'

const SuggestionItem = props => {
  const {onClick, suggestion} = props
  const changeSearchInput = () => {
    onClick(suggestion.suggestion)
  }
  return (
    <li className="suggestion-item">
      <p className="suggestion">{suggestion.suggestion}</p>
      <button className="button" onClick={changeSearchInput} type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
