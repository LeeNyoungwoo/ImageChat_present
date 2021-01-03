import React from 'react';
import { useSelector } from 'react-redux';
import MessageList from '../components/MessageList/MessageList';

export default function MessageListContainer() {
    const chatList = useSelector(state => state.chatdata.chatList);

    return (
        <MessageList
            chatList={chatList}
        />
    );
}