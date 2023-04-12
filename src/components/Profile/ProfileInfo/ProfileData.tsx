import React from "react";
import {ProfileType} from "../../../redux/store";


type ProfileDataType = {
    profile: ProfileType
}

export const ProfileData = (props: ProfileDataType) => {
    return <div>
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
        </div>
    </div>
}