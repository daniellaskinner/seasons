import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'

// code to determine location and month to output 'winter' or 'summer'
// pass w or s through props to display
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      lat: null,
      long: null
    }
  }

  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    )

    return <div>Latitude: </div>
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'))
