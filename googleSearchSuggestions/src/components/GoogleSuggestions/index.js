import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChange = event => this.setState({searchInput: event.target.value})

  onClick = value => this.setState({searchInput: value})

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const filteredSuggestions = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )
    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />
        <div className="suggestions-container">
          <div className="input-container">
            <img
              className="search"
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            />
            <input
              type="search"
              value={searchInput}
              onChange={this.onChange}
              className="input"
              placeholder="Search Google"
            />
          </div>
          <ul className="suggestions-list">
            {filteredSuggestions.map(eachSuggestion => (
              <SuggestionItem
                key={eachSuggestion.id}
                suggestion={eachSuggestion}
                onClick={this.onClick}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
