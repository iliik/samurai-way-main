import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";
import {PostType, state} from "../../Redux/State";

type ProfilePageType = {
    profile: PostType[]
    posts: PostType[]

}


export const Profile = (props: ProfilePageType) => {

    let posts = state.profilePage.posts

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts} profile={posts}/>
        </div>

    )
}