import React from "react";
import {ProfileType} from "../../../redux/store";
import {Contact} from "../../../components/Profile/ProfileInfo/Contact";


type ProfileDataType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}

export const ProfileData = (props: ProfileDataType) => {


    return <div>
        {props.isOwner && <div>
            <button onClick={props.goToEditMode}>edit</button>
        </div>}
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
            <b>Contact</b>:{Object.keys(props.profile.contacts).map(key => {
            // @ts-ignore
            return<Contact key={key} contactsTitle={key} contactValue={props.profile.contacts[key]}/>
        })}

        </div>
    </div>
}