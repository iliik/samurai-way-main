import React from "react"
import {Field, reduxForm} from "redux-form";
import {Input} from "../components/common/FormsControls/FormsControls";
import {required} from "../utils/validator/validators";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";
import style from './../components/common/FormsControls/FormsControl.module.css'

// type StateType ={
//     state:InitialStateType
//     auth:{
//         isAuth:boolean
//     }
// }
// type formDataType ={
//     password:null | number
//     email: null | string,
//     rememberMe:null | number,
// }

export const LoginForm = (props: any) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Email"} name={'email'} component={Input} validate={[required]}/>
        </div>
        <div>
            <Field placeholder={"Password"} name={'password'} component={Input} type={'password'}
                   validate={[required]}/>
        </div>
        <div>
            <Field type={'checkbox'} name={'rememberMe'} component={Input}/>remember me
        </div>
        {props.error && <div className={style.formError}>
            {props.error}
        </div>
        }
        <div>
            <button> Login</button>
        </div>
    </form>
}


export const Login = (props: any) => {
    const onSubmit = (formData: any) => {
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