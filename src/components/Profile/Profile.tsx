import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts, MyPostsPropsType} from "./MyPosts/MyPosts";
import {PostType, ProfilePageType, state} from "../../Redux/State";

export type ProfilePropsType={
    state:ProfilePageType
    addPost: PostType

}
export const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}  addPost={ props.addPost} />
        </div>

    )
}