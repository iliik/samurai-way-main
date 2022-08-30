import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Posts/Post";



export const MyPosts = (props) => {

    let postsElement = props.posts.map(p=><Post messages={p.message} likesCount={p.likesCount} />)

    return (
        <div className={s.postsBloc}>
            <h3>My Posts</h3>
            <div>
                <div><textarea></textarea></div>
                <button>Add Post</button>
                <button>Remuve</button>
            </div>
            <div className={s.post}>
                {postsElement}
            </div>
        </div>
    )
}
