import React, {ChangeEvent} from 'react';
// @ts-ignore
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";


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
    newMessageBody: string
}
type DialogsPropsType = {
    dialogsPage: DialogPageType
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}

const Dialogs = (props: DialogsPropsType) => {
    // debugger
    const dialogElement = props.dialogsPage.dialogs.map (d => <DialogItem name = {d.name} id = {d.id} key={d.id}/> );
    // @ts-ignore
    const messagesElements = props.dialogsPage.messages.map (m => <Message message={m.message} key={m.id} id={m.id}/> );

    const stateOrigin = props.dialogsPage;
    //let stateOrigin = props.store.getState().dialogsPage

    const newMessageBody = stateOrigin.newMessageBody;

    const onSendMessageClick = () => { props.sendMessage(); }

    const onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let body = event.target.value;
        props.updateNewMessageBody(body)
        // props.store.dispatch(updateNewMessageBodyCreator(body));
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}> {dialogElement} </div>
            <div> {messagesElements} </div>
            <div>
                <div>
                    <textarea value={newMessageBody} onChange={onNewMessageChange}
                              placeholder='Enter your message'>
                    </textarea>
                </div>

                <div> <button onClick={onSendMessageClick}>Send</button> </div>

            </div>
        </div>
    )
}

export default Dialogs;