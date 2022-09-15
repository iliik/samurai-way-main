import React from 'react';
import s from './Post.module.css';

type PostType = {
    id?: number,
        message: string,
        likesCount: number
}

export const Post = (props: PostType) => {
    return (
        <div>
            <div className={s.item}>
                <img
                    src="https://images.pexels.com/photos/10299953/pexels-photo-10299953.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                {props.message}
                <div>
                    <span>{props.likesCount}</span>
                </div>
            </div>
        </div>

    )
}