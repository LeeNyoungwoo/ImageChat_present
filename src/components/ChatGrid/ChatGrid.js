import React, { useEffect, useRef } from 'react'
import { Button, Input } from 'semantic-ui-react'
import MessageListContainer from "../../containers/MessageListContainer"
import './ChatGrid.css';

export default function ChatGrid(props) {
    const time = new Date()
    const [input, setInput] = React.useState('');
    const messagesEnd = useRef(null)

    const scrollToBottom = () => {
        messagesEnd.current.scrollIntoView({ behavior: "smooth" })
    }

    const handleChangeText = (e) => {
        setInput(e.target.value)
    }

    const handleCreate = () => {
        const utterance = {
            type: props.turn,
            time: time.toLocaleTimeString(),
            text: input
        }
        const info = {
            text: input,
            happiness : Math.floor(Math.random() * 100),
            sadness: Math.floor(Math.random() * 100),
            neutral: Math.floor(Math.random() * 100),
        }

        if (props.turn === true)
            props.conv_addBotInfo(info)

        props.conv_chatAdd(utterance)
        props.conv_changeTurn()
        setInput('')
        scrollToBottom()
    }

    const handleKeyPress = (e) => {
        if(input !== '' && e.key === 'Enter') {
            handleCreate();
        }
    }

    useEffect(scrollToBottom, [props.chatList]);

    return (
        <div className="chatOuterBox">
            <div className="chatInnerBox">
                <main className="chatRoom">
                    <div className="dateSection">
                        <span>{time.toLocaleTimeString()}</span>
                    </div>
                    <MessageListContainer />
                    <div style={{height:'2vh'}}></div>
                    <div ref={messagesEnd} />
                </main>
                <div className="textInputBox">
                    <div className="textInputBoxInput">
                        <Input fluid type='text' placeholder='Type...' action>
                            <input style={{marginLeft:'3px'}} value={input} onChange={handleChangeText} onKeyPress={handleKeyPress}/>
                            <Button onClick={handleCreate} type='submit' size='big' style={{width:'12%', paddingLeft:'4%', fontSize:'2vh'}}>
                                Send
                            </Button>
                        </Input>
                    </div>
                </div>
            </div>
        </div>
    );
}