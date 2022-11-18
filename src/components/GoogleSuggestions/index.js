import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {word: ''}

  showValue = clickedValue => {
    this.setState({word: clickedValue})
  }

  changeSearch = event => {
    this.setState({word: event.target.value})
  }

  render() {
    const {word} = this.state
    const {suggestionsList} = this.props
    const searchResult = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(word.toLowerCase()),
    )
    return (
      <div className="browser-container">
        <div className="google-container">
          <img
            className="google-logo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
          <div className="search-container">
            <div className="input-container">
              <img
                className="search-logo"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
              />
              <input
                type="search"
                className="search-box"
                placeholder="Search Google"
                onChange={this.changeSearch}
                value={word}
              />
            </div>
            <ul className="unordered-list">
              {searchResult.map(eachItem => (
                <SuggestionItem
                  eachItem={eachItem}
                  showValue={this.showValue}
                  key={eachItem.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
