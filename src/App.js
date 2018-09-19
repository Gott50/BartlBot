import React, {Component} from 'react';
import {addResponseMessage, Widget} from 'react-chat-widget';
import DialogFlowGateway from './DialogFlowGateway'

import 'react-chat-widget/lib/styles.css';

class App extends Component {
    componentDidMount() {
        addResponseMessage("Welcome to this awesome chat!");
    }

    handleNewUserMessage(newMessage) {
        console.log(`New message incomig! ${newMessage}`);
        // Now send the message throught the backend API
        DialogFlowGateway.textRequest(newMessage)
            .then(response => {
                console.log("res:", response)
                response.fulfillmentMessages.forEach(this.displayResponse);
                if (response.action === "OPEN_LINK" && response.fulfillmentText)
                    document.open(response.fulfillmentText);
            })
    }

    displayResponse(message) {
        if(message.text)
            message.text.text.forEach(addResponseMessage);

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