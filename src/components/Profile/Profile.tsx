import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/store";

type ProfilePropsType ={
    profile: ProfileType
    status:string
    updateStatus:  (status: string) => void
    isOwner: boolean
    savePhoto: any
    saveProfile: ProfileType
}
export const Profile = (props:ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo
                savePhoto={props.savePhoto}
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                saveProfile={props.saveProfile}
            />
            <MyPostsContainer/>
        </div>

    )
}