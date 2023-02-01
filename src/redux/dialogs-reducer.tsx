import {DialogPageType} from "../components/Dialogs/Dialogs";
import {ActionsTypes} from "./store";

const SEND_MESSAGE = "SEND-MESSAGE"

export type sendMessageCreatorType = {
    type: "SEND-MESSAGE"
    newMessageBody: string
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
}

const dialogReducer = (state: DialogPageType = initialState, action: ActionsTypes): DialogPageType => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            }
        default:
            return state
    }
}

export const sendMessageCreator = (newMessageBody: string) => ({type: SEND_MESSAGE, newMessageBody} as const
)

export default dialogReducer