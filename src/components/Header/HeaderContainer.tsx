import React from 'react';
import {Header} from "./Header";
import {initialStatePropsType} from "../../redux/users-reducer";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";

export type HeaderContainerType = {
    toggleIsFetching: (isFetching: boolean) => void
    setUsers: (users: initialStatePropsType[]) => void
    setUsersTotalCount: (totalCount: number) => void
    setAuthUserData: (userId: null, email: null, login: null) => void
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    getAuthUserData: () => void
}

export class HeaderContainer extends React.Component <HeaderContainerType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    return() {
        return <Header isAuth={false} login={null}/>
    }
}

const mapStateToProps = (state: initialStatePropsType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})
connect(mapStateToProps, {getAuthUserData})(HeaderContainer)

