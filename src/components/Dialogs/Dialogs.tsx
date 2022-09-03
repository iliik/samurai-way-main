import React from 'react';
import s from './Dialogs.module.css'
import {DialodItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogPropsType} from "../../Redux/State";


export const Dialogs = (props: DialogPropsType) => {

    let dialogElements = props.dialog.dialogs.map(d => <DialodItem name={d.name} id={d.id}/>)
    let messagesElements = props.dialog.messages.map(m => <Message message={m.message}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}