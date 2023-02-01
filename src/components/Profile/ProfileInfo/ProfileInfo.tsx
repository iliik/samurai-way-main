import React from "react";
import s from './ProfileInfo.module.css'
import PreloaderImg from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import {ProfileType} from "../../../redux/store";


type ProfileInfoType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string)=>void

}


export const ProfileInfo = (props: ProfileInfoType) => {

    if (!props.profile) {
        return <PreloaderImg/>
    }
    return (
        <div>
            <div>
                <img
                    src="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=pexels-pixabay-531880.jpg&fm=jpg"/>
            </div>
            <div className={s.discripshenBloc}>
                <p>{props.profile?.fullName}</p>
                <img src={props.profile?.photos?.large}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    )
}