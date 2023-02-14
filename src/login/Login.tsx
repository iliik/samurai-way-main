import React from "react"
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../components/common/FormsControls/FormsControls";
import {required} from "../utils/validator/validators";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";
import style from './../components/common/FormsControls/FormsControl.module.css'

// type CreateFieldType = {
//     placeholder: string
//     name: string
//     component: () => void
//     validate: () => void
//     text: string
//     props: {}
// }
export const LoginForm = (handleSubmit: any, error: any) => {
    return <form onSubmit={handleSubmit}>
        {createField("Email", "email", [required], Input)}
        {createField("Password", 'password', [required], Input, {type: 'password'})}
        {createField(null, "rememberMe", [], Input, {type: 'checkbox'}, "remember me")}
        <div>
            <Field type={'checkbox'} name={'rememberMe'} component={Input}/>remember me
        </div>
        {error && <div className={style.formError}>
            {error}
        </div>
        }
        <div>
            <button> Login</button>
        </div>
    </form>
}


export const Login = (props: any) => {
    const onSubmit = (formData: any) => {

        // @ts-ignore
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {

        return <Navigate to={'profile'}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}


export const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);


const mapStateToProps = (state: AppStateType) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    isAuth: state.auth.isAuth
}

export default connect(mapStateToProps, {})(Login)