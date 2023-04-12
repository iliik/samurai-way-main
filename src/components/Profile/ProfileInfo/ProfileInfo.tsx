import React from "react";
import s from './ProfileInfo.module.css'
import PreloaderImg from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/store";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import usersPhoto from "../../../assest/images/User.png";

type ProfileInfoType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: any
}

export const ProfileInfo = (props: ProfileInfoType) => {

    if (!props.profile) {
        return <PreloaderImg/>
    }

    const onMainPhotoSelector = (e: any) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    return (
        <div>
            <div>
                <img
                    src="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=pexels-pixabay-531880.jpg&fm=jpg"/>
            </div>
            <div className={s.discripshenBloc}>
                <p>{props.profile?.fullName}</p>
                <img src={props.profile?.photos?.large || usersPhoto} className={s.mainPhoto}/>
                {props.isOwner && <input type={'file'} onChange={onMainPhotoSelector}/>}
                <div>
                    <div>
                        <b>Full name</b>:{props.profile.fullName}
                    </div>
                    <div>
                        <b>Looking for a job</b>:{props.profile.lookingForAJob ? 'yes' : 'no'}
                    </div>
                    {props.profile.lookingForAJob &&
                        <div>
                            <b>My professional skills</b>:{props.profile.lookingForAJobDescription}
                        </div>
                    }
                    <div>
                        <b>About me</b>:{props.profile.aboutMe}
                    </div>
                    <div>
                        <b>Contacts</b>:{props.profile.contacts}
                    </div>
                </div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}