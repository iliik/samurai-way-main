import React from 'react';
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

export type HeaderType={
    isAuth:boolean
    login: null
}

export const Header = (props:HeaderType) => {
    return (
        <header className={s.header}>
            <img src='https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png'/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/Login'}>Login</NavLink>}

            </div>
        </header>
    )
}