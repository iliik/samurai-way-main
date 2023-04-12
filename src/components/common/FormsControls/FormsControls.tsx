import React from 'react';
import style from './FormsControl.module.css'
import {Field} from "redux-form";


// @ts-ignore
const FormControl = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error;

    return (
        <div className={style.formControl + "" + (hasError ? style.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl  {...props} ><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props} ><input {...input} {...restProps}/></FormControl>
}

export type CreateFieldType = {
    placeholder: string
    name: string
    component: () => void
    validate: () => void
    text: string
    props: {}
}
export const createField = (props: CreateFieldType) => (
    <div><Field placeholder={props.placeholder}
                name={props.name}
                component={props.component}
                validate={props.validate}
                {...props.props}
    /> {props.text}</div>
)

