import React, {ComponentType, FC} from "react";
import {Navigate} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})
export function WithAuthRedirect<T extends JSX.IntrinsicAttributes>(Component:ComponentType<T>) {

    const RedirectComponent: FC<mapStateToPropsType>=(props)=>{
        let {isAuth, ...componentProps} =  props
        console.log(props)
        if (!props.isAuth ) return <Navigate to="/login"/>
        return <Component{...componentProps as T}/>
    }



   return  connect(mapStateToPropsForRedirect)(RedirectComponent)

}
type mapStateToPropsType = ReturnType<typeof mapStateToPropsForRedirect>