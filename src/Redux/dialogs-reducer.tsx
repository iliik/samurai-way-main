import {ActionsTypes} from "./store";
import {DialogPageType} from "../components/Dialogs/Dialogs";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE"

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
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ],
    newMessageBody: ""
}

const dialogReducer = (state: DialogPageType = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state
        default:
            return state
    }
}

export type sendMessageCreatorType = {
    type: "SEND-MESSAGE"
}
export type updateNewMessageBodyCreatorType = {
    type: "UPDATE-NEW-MESSAGE-BODY"
    body: string
}


export const sendMessageCreator = () => ({type: SEND_MESSAGE} as const)
export const updateNewMessageBodyCreator = (body: string) => ({
        type: UPDATE_NEW_MESSAGE_BODY,
        body } as const
)


export default dialogReducer