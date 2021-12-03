import React from 'react'

class SeasonDisplay extends React.Component {

  //TODO: set props here to pass from parent component- lat and long
  // use these props to update state
  // OR: code to determine season live in index and pass down as props to seasonDisplay.

  state = {
    lat: false,
    long: false,
    winter: true
  }

  componentDidMount() {
    // if current month is sept- march and lat fits with criteria
    if (this.state.lat > 30 && this.state.long > 50) {
      this.setState({winter: !this.state.winter})
    }
  }

  render() {
    return <div>{this.state.winter ? 'It\'s chilly, wrap up!' : 'Its hot hot hot!'}</div>
  }
}

export default SeasonDisplay
