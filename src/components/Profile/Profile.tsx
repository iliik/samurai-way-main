import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";


export const Profile = () => {
    return (
        <div className={s.content}>
            Main content
            <div>
                <img
                    src="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=pexels-pixabay-531880.jpg&fm=jpg"/>
            </div>
            <div>
                Ava +discripshen
            </div>
            <MyPosts/>
        </div>
    )
}