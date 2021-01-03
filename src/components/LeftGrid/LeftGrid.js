import React from 'react';
import { Image } from 'semantic-ui-react'
import chatbot_img from './chatbot.png';
import './LeftGrid.css';

export default function LeftGrid() {
    return (
        <div className="leftGrid">
            <div className="leftGridImage">
                <Image style={{width: '20vh', height: 'auto'}} src={chatbot_img}/>
            </div>
            <div className="leftGridTag">
                # Bot Name
            </div>
        </div>
    );
}
