import React from 'react';
import s from "./Navbar.module.css";

// let s ={
//     'nav':'Navbar_nav__F987c',
//     'item':'Navbar_item__EWpFL'
// }


export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <div className={s.item}><a>Profile</a></div>
                <div className={s.item}><a>Messages</a></div>
                <div className={s.item}><a>News</a></div>
                <div className={s.item}><a>Music</a></div>
                <div className={s.item}><a>Setings</a></div>
            </div>
        </nav>
    )
}