import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogType = {
    id: number,
    name: string
}

export const DialodItem = (props: DialogType) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>
                <img src={'https://vraki.net/sites/default/files/inline/images/avatarki-dlya-muzhchin-sereznye-podborka-foto-026.jpg'}/>
                {props.name}
            </NavLink>
        </div>
    )
}
