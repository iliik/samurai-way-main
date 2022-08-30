import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";


type PostsType = {
    id: number
    message: string
    likesCount: number
}
type ProfileType = {
    posts:Array<PostsType>
}

let posts = [
    {id: 1, message: "Hi, how are you", likesCount: 22},
    {id: 2, message: "Hi, Im faen", likesCount: 14},
]

export const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>

    )
}