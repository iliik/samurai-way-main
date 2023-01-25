import React from "react";
import {Navigate} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})
export const WithAuthRedirect = (Component:any) =>{
    class RedirectComponent extends React.Component <any,any> {
        render () {
            if (!this.props.isAuth ) return <Navigate to="/login"/>

            return <Component{...this.props}/>
        }
    }


   let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

}