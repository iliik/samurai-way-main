import React, {ChangeEvent, MouseEvent, useState} from 'react';
import s from './MyPosts.module.css';
import {PostType, state} from "../../../Redux/State";
import {Message} from "../../Dialogs/Message/Message";
import {Post} from "./Posts/Post";

export type MyPostsPropsType={
    posts: PostType[]
    addPost:PostType

}

export const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map(p =>
        <Post id={p.id} likesCount={p.likesCount} message={p.message}/>)
    const [title, setTitle] = useState('')

    let newPostElements= (e:ChangeEvent<HTMLTextAreaElement>)=>{
        setTitle(e.currentTarget.value)

    }

    let addPost = (e:MouseEvent<HTMLButtonElement>) => {
        setTitle(title)
    }


    return (
        <div className={s.postsBloc}>
            <h3>MyPost</h3>
            <div>
                <div><textarea onChange={newPostElements}></textarea></div>
                <button onClick={addPost}>Add Post</button>
                <button>Remuve</button>
            </div>
            <div className={s.post}>
                {postsElements}
            </div>
        </div>
    )
}
