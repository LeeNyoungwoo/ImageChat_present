import { createAction, handleActions } from 'redux-actions'

const TURN = 'chat/TURN' // 대화 턴 변경
const CHAT_LIST = 'chat/CHAT_LIST' // 발화 추가
const BOT_INFO = 'chat/BOT_INFO' // 봇 발화 세부 정보 갱신
const RESET_DATA = 'result/RESET' // 데이터 초기화

let chat_id = 0

export const changeTurn= createAction(TURN)
export const chatAdd = createAction(CHAT_LIST, object => ({ object, chat_id: chat_id++ }))
export const addBotInfo = createAction(BOT_INFO, object => ({ object }))
export const resetData = createAction(RESET_DATA)

const initialState = {
    // BOT=true, USER=false
    turn: true,
    chatList: [
        // Example DataType
        // {
        //     id: 0,
        //     type: true,
        //     time: time.toLocaleTimeString(),
        //     text: 'Hi, I`m chatbot',
        // },
    ],
    botInfo: {
        // Example DataType
        // text: "Oh, will you have a vacation?",
        // happiness : 73,
        // sadness: 15,
        // neutral: 12,
    }
}

export default handleActions(
    {
        [TURN]: (state) => ({
            ...state,
            turn: !state.turn
        }),
        [CHAT_LIST]: (state, action) => ({
            ...state,
            chatList: state.chatList.concat({
                id: action.payload.chat_id,
                type: action.payload.object.type,
                time: action.payload.object.time,
                text: action.payload.object.text,
            })
        }),
        [BOT_INFO]: (state, action) => ({
            ...state,
            botInfo: {
                text: action.payload.object.text,
                happiness: action.payload.object.happiness,
                sadness: action.payload.object.sadness,
                neutral: action.payload.object.neutral
            }
        }),
        [RESET_DATA]: (state) => ({
            ...state,
            turn: true,
            chatList: initialState.chatList,
            botInfo: initialState.botInfo,
        }),
    },
    initialState
)