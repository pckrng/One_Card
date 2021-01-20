import React, { Component } from 'react';
import '../Card.css';
import Tilt from 'react-vanilla-tilt';
import  CardInner  from '../Components/CardInner';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

class App extends Component {

onMouseLeave(e) {
    console.log('clientY:', e.nativeEvent.clientY);}

render() {
    return (
    <div className="App">
        <Tilt className="Tilt" style={{ height: 600, width: 400 }} onMouseLeave={this.onMouseLeave}>
            <CardInner />
        </Tilt>
    </div>
    );
}
}

export default App;