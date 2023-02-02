import React from 'react';
// @ts-ignore
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {AddMessageFormRedux} from "./AddMessageForm/AddMessageForm";


type DialogType = {
    id: number,
    name: string
}
type MessageType = {
    id: number,
    message: string
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
type DialogsPropsType = {
    dialogsPage: DialogPageType
    updateNewMessageBody: (body: string) => void
    sendMessage: (newMessageBody: string) => void
    isAuth: boolean
}

const Dialogs = (props: DialogsPropsType) => {
    const dialogElement = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
    const messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>);

    const addNewMessage = (values: any) => {
        props.sendMessage(values.newMessageBody)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}> {dialogElement} </div>
            <div> {messagesElements} </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}

export default Dialogs;