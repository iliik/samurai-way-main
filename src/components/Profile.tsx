import React from 'react';
import s from './Profile.module.css';

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
            <div>
                My Posts
                <div>
                    New Posts
                </div>
                <div className={s.Post}>
                    <div className={s.item}>
                        Post-1
                    </div>
                    <div className={s.item}>
                        Post-2
                    </div>
                </div>
            </div>
        </div>
    )
}