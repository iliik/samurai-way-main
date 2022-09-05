import React from 'react';
import s from './MyPosts.module.css';
import {PostType, state} from "../../../Redux/State";
import {Message} from "../../Dialogs/Message/Message";
import {Post} from "./Posts/Post";

type ProfilePageType = {
    profile: PostType[]
    posts: PostType[]

}


export const MyPosts = (props: ProfilePageType) => {

    let postsElements = props.profile.map(p =>
        <Post id={p.id} likesCount={p.likesCount} message={p.message}/>)
    let onChangeHandler = () => {

    }


    return (
        <div className={s.postsBloc}>
            <h3>MyPost</h3>
            <div>
                <div><textarea onChange={onChangeHandler}></textarea></div>
                <button>Add Post</button>
                <button>Remuve</button>
            </div>
            <div className={s.post}>
                {postsElements}
            </div>
        </div>
    )
}