import React, { Component } from 'react'

export class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  incrementCount=()=> {
    this.setState(prevState => {
      return { count: prevState.count + 1 }
    }
    )
  }

  render() {
    let { count } = this.state;
    return (
      <div>
        <p>Clicked {count} Number of Times.</p>
        <button onClick={this.incrementCount}>Click Here</button>
      </div>
    )
  }
}

export default Counter
