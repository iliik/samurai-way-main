import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Posts/Post";

export const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
                <button>Remuve</button>
            </div>
            <div className={s.Post}>
                <Post messages="Hi, how are you" likesCount="like 22"/>
                <Post messages="Hi, Im faen" likesCount=" like 14"/>
            </div>
        </div>
    )
}