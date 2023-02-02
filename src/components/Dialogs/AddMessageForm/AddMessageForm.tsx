import {maxLengthCreator, required} from "../../../utils/validator/validators";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import React from "react";

const maxLength50 = maxLengthCreator(50)

export const AddMessageForm = (props: any) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea}
                   name='newMessageBody'
                   placeholder='Enter yir message'
                   validate={[required, maxLength50]}/>
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
}
export const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)
