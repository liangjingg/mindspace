import React, { Component } from 'react';
import './plainpages.css';
import chatty from '../assets/chatbotbox.png';

export class Chatbot extends Component {
    render() {
        return (
            <div className="AllPages">
                <h4> Come chat with chatty </h4>
                <br/>
                <table className="chatbottable" width="700px" height="400px">
                    <tr>
                        <img src={chatty} className="chatbotbox" />
                        <iframe src='https://webchat.botframework.com/embed/ase-chatbot-nodejs?s=L1IiqHRMFUQ.f63dRYiscVIhsc89pVZzgrP8qJ-RwYlN47njEY3ezec' width='700px' height='400px'></iframe>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Chatbot
