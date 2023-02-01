import React from 'react';
// @ts-ignore
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {Field, reduxForm} from "redux-form";


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
    // newMessageBody: string
}
type DialogsPropsType = {
    dialogsPage: DialogPageType
    updateNewMessageBody: (body: string) => void
    sendMessage: (newMessageBody:string) => void
    isAuth: boolean


}

// type addMessageChangeType ={
//     values:number
//     sendMessage: () => void
// }

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


export const AddMessageForm = (props: any) => {
    return <form onSubmit={props.handleSubmit}>
        <div><Field component='textarea' name='newMessageBody' placeholder='Enter yir message'/></div>
        <div>
            <button>Send</button>
        </div>
    </form>
}
const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;