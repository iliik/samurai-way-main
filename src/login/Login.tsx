import React from "react"
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../components/common/FormsControls/FormsControls";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";
import style from './../components/common/FormsControls/FormsControl.module.css'
import {Dispatch} from "redux";


type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

type OwnPropsType = {
    handleSubmit: () => void
}

export type DispatchPropsType = {
    onSubmit: (data: FormDataType, dispatch: Dispatch<any>, props: OwnPropsType) => void
}

type MixFromPropsType = OwnPropsType & DispatchPropsType & InjectedFormProps<FormDataType, OwnPropsType>


export const LoginForm: React.FC<MixFromPropsType> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        {/*{createField("Email", "email", [required], Input)}*/}
        {/*{createField("Password", 'password', [required], Input, {type: 'password'})}*/}
        {/*{createField(null, "rememberMe", [], Input, {type: 'checkbox'}, "remember me")}*/}
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
    const onSubmit = (formData: FormDataType) => {

        // @ts-ignore
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {

        return <Navigate to={'profile'}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm  onSubmit={onSubmit}/>
    </div>
}


// @ts-ignore
export const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm);


const mapStateToProps = (state: AppStateType) => {

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    isAuth: state.auth.isAuth
}

export default connect(mapStateToProps, {})(Login)