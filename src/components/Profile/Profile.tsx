import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../Redux/store";
import MyPosts from "./MyPosts/MyPosts";

export type ProfilePagePropsType = {
    profilePage: ProfilePageType,
    newPostText: string,
    updateNewPostText: (newPostText: string) => void
    addPost: () => void
}
export const Profile = (props: ProfilePagePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                postsData = {props.profilePage.posts}
                newPostText = {props.newPostText}
                updateNewPostText={props.updateNewPostText}  //6
                addPost = {props.addPost}
            />
        </div>

    )
}