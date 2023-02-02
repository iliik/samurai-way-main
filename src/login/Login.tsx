import React from "react"
import {Field, reduxForm} from "redux-form";
import {Input} from "../components/common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../utils/validator/validators";

export const Login = () => {
    const onSubmit = (formData: any) => {
        console.log(formData)
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const maxLength15 = maxLengthCreator(15)

export const LoginForm = (props: any) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Login"} name={'login'} component={Input} validate={[required, maxLength15]}/>
        </div>
        <div>
            <Field placeholder={"Password"} name={'password'} component={Input} validate={[required, maxLength15]}/>
        </div>
        <div>
            <Field type={'checkbox'} name={'rememberMe'} component={Input}/>remember me
        </div>
        <div>
            <button> Login</button>
        </div>
    </form>
}


export const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);
