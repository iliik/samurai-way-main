import React, {ChangeEvent, MouseEvent, useState} from 'react';
import s from './Dialogs.module.css'
import {DialodItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogPageType} from "../../Redux/State";


type DialogsPropsType = {
    state: DialogPageType
    addPost: () => void
}

export const Dialogs = (props: DialogsPropsType) => {
    let dialogElements = props.state.dialogs.map(d =>
        <DialodItem name={d.name} id={d.id} key={d.id}/>)
    let messagesElements = props.state.messages.map(m => <Message message={m.message} key={m.id}/>)

    const [newMessage, setNewMessage] = useState('')

    const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) =>{
        setNewMessage(e.currentTarget.value)
    }
    const onClickHandler = (e:MouseEvent<HTMLButtonElement>) => {
        alert(newMessage)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={onChangeHandler}></textarea>
                    <button onClick={onClickHandler}>add</button>
                </div>
            </div>
        </div>
    )
}