import React from "react";
class Clock extends React.Component {
    state = {
        time: new Date().toLocaleTimeString(),
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({time: new Date().toLocaleTimeString()})    
        }, 1000)
    }

    // the set interval function is a built in JavaScript 
    // function. It's going to run this inner function 
    // here once every second.
    
    render() {
        return (
            <div className="time">
                The time is: {this.state.time}
            </div>
        );
    }
}


// Renders the App component into a div with id 'root'
ReactDOM.render(<Clock />, document.querySelector('#root'));
