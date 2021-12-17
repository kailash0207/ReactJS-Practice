import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResults = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="destination-search-container">
        <h1 className="heading">Destination Search</h1>
        <div className="input-container">
          <input
            className="input"
            type="search"
            placeholder="Search"
            onChange={this.onChangeSearch}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-img"
          />
        </div>
        <ul className="destinations-container">
          {searchResults.map(eachResult => (
            <DestinationItem key={eachResult.id} destination={eachResult} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
