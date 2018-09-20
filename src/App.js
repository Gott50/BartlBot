import React, {Component} from 'react';
import {addResponseMessage, Widget} from 'react-chat-widget';
import DialogFlowGateway from './DialogFlowGateway'

import 'react-chat-widget/lib/styles.css';

class App extends Component {
    componentDidMount() {
        addResponseMessage("Welcome to this awesome chat!");
    }

    handleNewUserMessage(newMessage) {
        DialogFlowGateway.textRequest(newMessage)
            .then(response => JSON.parse(response).result)
            .then(result => {
                result.fulfillment.messages.forEach(message => {
                    if(message.type === 0)
                        return addResponseMessage(message.speech);

                });
                if (result.action === "OPEN_LINK" && result.fulfillment.speech)
                    window.open(result.fulfillment.speech);
            })
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