import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


export const DialodItem = (props: any) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export const Message = (props: any) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

export const Dialogs = (props: any) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialodItem name="Dima" id="1"/>
                <DialodItem name="Andrey" id="2"/>
                <DialodItem name="Olga" id="3"/>
                <DialodItem name="Ilya" id="4"/>
                <DialodItem name="Inga" id="5"/>
                <DialodItem name="Vova" id="6"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="Yo"/>
                <Message message="Hi Bro"/>
                <Message message="Im Faen"/>
                <Message message="Favoeite"/>
                <Message message="Gang"/>
            </div>
        </div>
    )
}