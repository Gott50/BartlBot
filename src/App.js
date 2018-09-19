import React, {Component} from 'react';
import {addResponseMessage, Widget} from 'react-chat-widget';
import DialogFlowGateway from './DialogFlowGateway'

import 'react-chat-widget/lib/styles.css';

class App extends Component {
    componentDidMount() {
        addResponseMessage("Welcome to this awesome chat!");
    }

    handleNewUserMessage = (newMessage) => {
        console.log(`New message incomig! ${newMessage}`);
        // Now send the message throught the backend API
        DialogFlowGateway.textRequest(newMessage)
            .then(response => addResponseMessage(response));
    }

    render() {
        return (
            <div className="App">
                <Widget
                    handleNewUserMessage={this.handleNewUserMessage}
                />
            </div>
        );
    }
}

export default App;