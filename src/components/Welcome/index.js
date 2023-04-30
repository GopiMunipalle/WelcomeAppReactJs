// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isClicked: false}

  isSubscribe = () => {
    this.setState(prevValue => ({isClicked: !prevValue.isClicked}))
  }

  subscribeButton = () => {
    const {isClicked} = this.state

    return isClicked ? 'subscribed' : 'subscribe'
  }

  render() {
    const buttonText = this.subscribeButton()
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <h1>Thank you! Happy Learning</h1>
        <div>
          <button className="button" type="button" onClick={this.isSubscribe}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
