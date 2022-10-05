import React from 'react';
// @ts-ignore
import s from './../Dialogs.module.css'

type MessageType = {
    message: string
    key: number
}

export const Message = (props: MessageType) => {
    return (
            <div className={s.dialog}> {props.message} </div>
    )
}

