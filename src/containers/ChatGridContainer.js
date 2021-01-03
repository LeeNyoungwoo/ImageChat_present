import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeTurn, chatAdd, addBotInfo } from '../store/modules/ChatData';
import ChatGrid from '../components/ChatGrid/ChatGrid';

export default function ChatGridContainer() {
    const dispatch = useDispatch();

    const turn = useSelector(state => state.chatdata.turn);
    const chatList = useSelector(state => state.chatdata.chatList);
    const botInfo = useSelector(state => state.chatdata.botInfo);

    const conv_changeTurn = () => {
        dispatch(changeTurn());
    }

    const conv_chatAdd = (object) => {
        dispatch(chatAdd(object));
    }

    const conv_addBotInfo = (object) => {
        dispatch(addBotInfo(object));
    }

    return (
        <ChatGrid
            turn={turn}
            chatList={chatList}
            botInfo={botInfo}
            conv_changeTurn={conv_changeTurn}
            conv_chatAdd={conv_chatAdd}
            conv_addBotInfo={conv_addBotInfo}
        />
    );
}