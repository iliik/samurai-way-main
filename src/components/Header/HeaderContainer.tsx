import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";


export class HeaderContainer extends React.Component <HeaderContainerType> {

    return() {
        return <Header isAuth={false} login={null} logout={logout} />
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

type HeaderContainerType = mapStateToPropsType & mapDispatchToPropsType
type mapStateToPropsType = {
    isAuth: boolean,
    login: null | string
}
type mapDispatchToPropsType = {
    getAuthUserData: () => void
}

// @ts-ignore
connect(mapStateToProps, {logout: logout})(HeaderContainer)

