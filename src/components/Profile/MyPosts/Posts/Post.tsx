import React from 'react';
import s from './Post.module.css';
import {message} from "antd";

export const Post = (props: any) => {
    return (
        <div>
            <div className={s.item}>
                <img
                    src="https://images.pexels.com/photos/10299953/pexels-photo-10299953.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                {props.messages}
                <div>
                    <span>{props.likesCount}</span>
                </div>
            </div>
        </div>

    )
}