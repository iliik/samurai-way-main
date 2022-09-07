import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";
import { ProfilePageType, state} from "../../Redux/State";

export type ProfilePropsType={
    state:ProfilePageType

}
export const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}  />
        </div>

    )
}