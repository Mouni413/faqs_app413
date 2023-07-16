// Write your code here.
import './index.css'

import {Component} from 'react'

class FaqItem extends Component {
  state = {isClicked: false}

  renderAnswer = () => {
    const {isClicked} = this.state
    const {eachItem} = this.props
    const {answerText} = eachItem
    if (isClicked === true) {
      return (
        <div className="answer-container">
          <p className="answer-text">{answerText}</p>
        </div>
      )
    }
    return null
  }

  onClickIcon = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked,
    }))
  }

  render() {
    const {eachItem} = this.props
    const {questionText} = eachItem
    const {isClicked} = this.state
    const image = isClicked
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const imageAlt = isClicked ? 'minus' : 'plus'
    return (
      <li className="faq-container">
        <div className="question-container">
          <h1>{questionText}</h1>
          <img
            src={image}
            alt={imageAlt}
            className="image"
            onClick={this.onClickIcon}
          />
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
