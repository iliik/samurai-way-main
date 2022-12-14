
import {DialogPageType} from "../components/Dialogs/Dialogs";
import {ActionsTypes} from "./store";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE"

export type sendMessageCreatorType = {
    type: "SEND-MESSAGE"
}
export type updateNewMessageBodyCreatorType = {
    type: "UPDATE-NEW-MESSAGE-BODY"
    body: string
}



let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Fain'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Gang'}
    ],
    newMessageBody: ""
}

const dialogReducer = (state: DialogPageType = initialState, action: ActionsTypes) : DialogPageType=> {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            }
        default:
            return state
    }
}

export const sendMessageCreator = () => ({
        type: SEND_MESSAGE
    } as const
)
export const updateNewMessageBodyCreator = (body: string) => ({
        type: UPDATE_NEW_MESSAGE_BODY, body: body
    } as const
)

export default dialogReducer