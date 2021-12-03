import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'

class App extends React.Component {

  state = {
    lat: false,
    errorMessage: false,
    isLoading: false
  }

  componentDidMount() {
    if (!this.state.errorMessage && !this.state.lat) {
      this.setState({isLoading: true})
    }

    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({lat: position.coords.latitude, long: position.coords.longitude, isLoading: false}),
      (err) => this.setState({errorMessage: err.message})
    )
  }

  // TODO: only want to display line 27 OR line 28, alter this conditional.
  render() {
    return <div>
      {this.state.errorMessage ? ('Error: ' + this.state.errorMessage) : <SeasonDisplay/>}
      {this.state.isLoading ? 'Loading' : null}
    </div>
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'))
