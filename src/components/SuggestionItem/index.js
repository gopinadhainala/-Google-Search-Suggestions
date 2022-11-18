import './index.css'

const SuggestionItem = props => {
  const {eachItem, showValue} = props
  const {suggestion} = eachItem
  const clickedValue = () => {
    showValue(suggestion)
  }
  return (
    <li className="list-styling">
      <p className="suggestion">{suggestion}</p>
      <button className="button-styling" type="button" onClick={clickedValue}>
        <img
          className="image-styling"
          alt="upArrow"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
