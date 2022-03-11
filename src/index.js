import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'

class App extends React.Component {

    state = {
        coordinates: false,
        errorMessage: false,
        isLoading: false
    }

    componentDidMount() {
        if (!this.state.errorMessage && !this.state.coordinates) {
            this.setState({isLoading: true})
        }

        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({
                coordinates: true,
                lat: position.coords.latitude,
                long: position.coords.longitude,
                isLoading: false
            }),
            (err) => this.setState({errorMessage: err.message})
        )
    }

    renderErrorOrLoading = () => {
        return !this.state.errorMessage ? 'loading' : `Error: $this.state.errorMessage`
    }

    render() {
        return <div>
            {this.state.coordinates ? <SeasonDisplay/> : this.renderErrorOrLoading()}
        </div>
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'))
