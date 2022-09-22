import React from 'react';
import s from "./Navbar.module.css";
import { NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <div className={s.item}>
                    <NavLink to='/profile' >Profile</NavLink></div>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to='/dialogs'
                            >Messages</NavLink></div>
                <div className={s.item}>
                    <NavLink to='/news'
                            >News</NavLink></div>
                <div className={s.item}>
                    <NavLink to='/music'
                             >Music</NavLink></div>
                <div className={s.item}>
                    <NavLink to='/seting'
                             >Setings</NavLink></div>
            </div>
        </nav>

    )
}
