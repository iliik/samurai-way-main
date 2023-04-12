import React, {useState} from "react";
import s from './ProfileInfo.module.css'
import PreloaderImg from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/store";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import usersPhoto from "../../../assest/images/User.png";
import {ProfileData} from "../ProfileInfo/ProfileData";
import {Contact} from "..//ProfileInfo/Contact";
import {ProfileDataForm} from "../ProfileInfo/ProfileDataform";


export type ProfileInfoType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: any
}

export const ProfileInfo = (props: ProfileInfoType) => {

    const [editMode, setEditMode] = useState(false)
    if (!props.profile) {
        return <PreloaderImg/>
    }

    const onMainPhotoSelector = (e: any) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData:any) => {
        console.log(formData)
    }
    return (
        <div>
            <div>
                {/*<img src="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=pexels-pixabay-531880.jpg&fm=jpg"/>*/}
            </div>
            <div className={s.discripshenBloc}>
                <p>{props.profile?.fullName}</p>
                <img src={props.profile?.photos?.large || usersPhoto} className={s.mainPhoto}/>
                {props.isOwner && <input type={'file'} onChange={onMainPhotoSelector}/>}
                <div>
                    {editMode ? <ProfileDataForm profile={props.profile} goToEditMode={()=>{setEditMode(true)}} onSubmit={onSubmit} /> : <ProfileData goToEditMode={()=>{setEditMode(true)}} profile={props.profile}  isOwner={props.isOwner} />}

                    {/*<Contact contacts={props.profile.contacts}/>*/}
                </div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )

}