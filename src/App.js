import React, {Component} from 'react';
import {Widget, addResponseMessage} from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

class App extends Component {
    componentDidMount() {
        addResponseMessage("Welcome to this awesome chat!");
    }

    render() {
        return (
            <div className="App">
                <Widget/>
            </div>
        );
    }
}

export default App;