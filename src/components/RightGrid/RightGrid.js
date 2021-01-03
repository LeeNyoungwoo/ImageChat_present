import React from 'react';
import { Card, List, Label, Button } from 'semantic-ui-react'
import './RightGrid.css';

export default function RightGrid(props) {
    return (
        <div className="RightGrid">
            <div className="RightTagGrid">
                <span className="RightTag"># Info</span>
            </div>
            <Card style={{width:'90%'}} centered>
                <Card.Content style={{fontSize:'1.5vh'}} header='BOT UTTERANCE' />
                <Card.Content style={{fontSize:'2vh'}} description={props.turn ? null : props.botInfo.text} />
            </Card>
            <div style={{height:'5%'}}></div>
            <Card style={{width:'90%'}} centered>
                <Card.Content style={{fontSize:'1.5vh'}} header='EMOTION' />
                <Card.Content extra>
                <List divided style={{fontSize:'2vh', color:'#424242'}}>
                    <List.Item style={{height:'5vh'}}>
                        <Label style={{fontSize:'1.8vh'}} size={'large'} color='red' horizontal>
                            Happiness
                        </Label>
                        {props.turn
                            ? null
                            : props.botInfo.happiness + ' %'
                        }
                    </List.Item>
                    <List.Item style={{height:'6vh'}}>
                        <Label style={{fontSize:'1.8vh', marginTop:'1vh'}} size={'large'} color='violet' horizontal>
                            Sadness
                        </Label>
                        {props.turn
                            ? null
                            : props.botInfo.sadness + ' %'
                        }
                    </List.Item>
                    <List.Item style={{height:'5vh'}}>
                        <Label style={{fontSize:'1.8vh', marginTop:'1vh'}} size={'large'} color='grey' horizontal>
                            Neutral
                        </Label>
                        {props.turn
                            ? null
                            : props.botInfo.neutral + ' %'
                        }
                    </List.Item>
                </List>
                </Card.Content>
            </Card>
            <div className="RightButtonGrid">
                <Button onClick={props.conv_resetData} style={{width:'90%', height:'40%', fontSize:'2vh'}} fluid color='red'>RESET</Button>
            </div>
        </div>
    );
}