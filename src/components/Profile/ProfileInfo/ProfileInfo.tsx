import React, {ChangeEvent, useState} from "react";
import s from './ProfileInfo.module.css'
import PreloaderImg from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/store";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import usersPhoto from "../../../assest/images/User.png";
import {ProfileData} from "../ProfileInfo/ProfileData";
import {ProfileDataForm} from "../ProfileInfo/ProfileDataform";
import {saveProfile} from "../../../redux/profile-reducer";


export type ProfileInfoType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: any
    saveProfile: ProfileType

}

export const ProfileInfo = (props: ProfileInfoType) => {

    const [editMode, setEditMode] = useState(false)
    if (!props.profile) {
        return <PreloaderImg/>
    }

    const onMainPhotoSelector = (e: ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        if (e.target.files.length) {
            // @ts-ignore
            props.savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData:any) => {
         saveProfile(formData)
        setEditMode(false)
    }
    return (
        <div>
            <div>
                {/*<img src="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=pexels-pixabay-531880.jpg&fm=jpg"/>*/}
            </div>
            <div className={s.discripshenBloc}>
                <img src={props.profile?.photos?.large || usersPhoto} className={s.mainPhoto}/>
                {props.isOwner && <input type={'file'} onChange={onMainPhotoSelector}/>}
                <div>
                    {editMode ? <ProfileDataForm
                        initialValue={props.profile}
                        profile={props.profile}
                        goToEditMode={()=>{setEditMode(true)}}
                        onSubmit={onSubmit} />
                        : <ProfileData
                            goToEditMode={()=>{setEditMode(true)}}
                            profile={props.profile}
                            isOwner={props.isOwner}/>}
                </div>
                <ProfileStatusWithHooks
                    status={props.status}
                    updateStatus={props.updateStatus}/>
            </div>
        </div>
    )

}