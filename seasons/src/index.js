import React from "react";
import ReactDOM  from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";



class App extends React.Component {
    
    // initializing state
    state = { lat : null, errorMessage : '' }


    // js constructo function,the first thing that runs when the component renders
    constructor(props) {
        super(props);

    }

    componentDidMount () {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat : position.coords.latitude }), 
            (err) => this.setState({ errorMessage : err.message })
        );
        
    }

    renderContent() {
        if(this.state.errorMessage && !this.state.lat) {
            return <div> Error : {this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay  lat = {this.state.lat} /> 
        }
    
        return <Spinner message='please accept loacation request'/>

    }


    // react says that we have to define render!
    render() { 
        return (
            <div className="red border">
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'));