import React, {ChangeEvent, MouseEvent, useState} from 'react';
import s from './MyPosts.module.css';
import {PostType, ProfilePageType} from "../../../Redux/State";
import {Post} from "./Posts/Post";



export const MyPosts = (props: any) => {
    let postsElements = props.postsData.map ((p: any) =>
        <Post message={p.message} likesCount={p.likesCount} />
    );

    let newPostElement= React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        props.addPost();
        props.updateNewPostText("")
    }

    const onPostChange = () => {
        let text = newPostElement.current?.value;
        props.updateNewPostText(text)
    }  // 2

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElement}   // 1
                        value={props.newPostText} // 3
                    />
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

}
