import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Posts/Post";

export const MyPosts = () => {
    return (
        <div className={s.postsBloc}>
            <h3>My Posts</h3>
            <div>
                <div><textarea></textarea></div>
                <button>Add Post</button>
                <button>Remuve</button>
            </div>
            <div className={s.post}>
                <Post messages="Hi, how are you" likesCount="like 22"/>
                <Post messages="Hi, Im faen" likesCount=" like 14"/>
            </div>
        </div>
    )
}
