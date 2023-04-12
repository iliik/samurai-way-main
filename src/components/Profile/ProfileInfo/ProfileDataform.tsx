import React from "react";
import {ProfileType} from "../../../redux/store";
import {createField, Input} from "./../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";


type ProfileDataType = {
    profile: ProfileType
    goToEditMode: () => void


}

export const ProfileDataForm = (props: ProfileDataType) => {
    return <form>
        <div>
            <button onClick={props.goToEditMode}>save</button>
        </div>
        <div>
            {/*<b>Full name</b>:{createField("Full name", 'fullName', [], Input)}*/}
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
    </form>
}
// @ts-ignore
const ProfileDataFormReduxForm = reduxForm({form:'edit-profile'})(ProfileDataForm)