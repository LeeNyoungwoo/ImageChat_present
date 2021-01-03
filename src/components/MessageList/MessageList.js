import React, { Component } from 'react';
import Message from "./Message"

export default class MessageList extends Component {

    render() {
        const { chatList } = this.props;
        
        // render whole messages during conversation
        const messages = chatList.map(
            ({id, type, time, text}, i) => (
                <div key={i}>
                    <Message
                        id={id}
                        type={type}
                        time={time}
                        text={text}
                    />
                </div>
            )
        );

        return (
            <div>
                {messages}
            </div>
        );
    }
}
