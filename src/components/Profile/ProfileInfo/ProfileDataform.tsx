import React from "react";
import {ProfileType} from "../../../redux/store";
import {reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";


type ProfileDataType = {
    profile: ProfileType
    goToEditMode: () => void
    onSubmit:(formData:any)=>void

}

export const ProfileDataForm = (props: ProfileDataType,handleSubmit:()=>void) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button onClick={props.goToEditMode}>save</button>
        </div>
        <div>
            <b>Full name</b>:
            {createField("Full name", 'fullName', [], Input, '', '')}
        </div>
        <div>
            <b>Looking for a job</b>:
            {createField("Looking for a job", 'lookingForAJob', [], Input, '', {type: 'checkbox'})}
        </div>
        {props.profile.lookingForAJob &&
            <div>
                <b>My professional skills</b>:
                {createField("My professional skills", 'lookingForAJobDescription', [], Textarea, '', '')}
            </div>
        }
        <div>
            <b>About me</b>:
            {createField("About me", 'aboutMe', [], Textarea, '', '')}
        </div>
        <div>
        </div>
    </form>


}
// @ts-ignore
const ProfileDataFormReduxForm = reduxForm<ProfileDataType>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;