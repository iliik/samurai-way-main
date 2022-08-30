import React from 'react';
import s from './Dialogs.module.css'

import {DialodItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export const Dialogs = (props: any) => {

    let dialogs = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Olga'},
        {id: 4, name: 'Ilya'},
        {id: 5, name: 'Inga'},
        {id: 6, name: 'Vova'}
    ]
    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Yo'},
        {id: 3, message: 'Hi Bro'},
        {id: 4, message: 'Im Faen'},
        {id: 5, message: 'Favoeite'},
        {id: 6, message: 'Gang'}
    ]

    let dialogElements = dialogs.map(d => <DialodItem name={d.name} id={d.id}/>)
    let messagesElements = messages.map(m => <Message message={m.message}/>)


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