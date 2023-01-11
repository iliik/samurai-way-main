import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {initialStatePropsType} from "../../redux/users-reducer";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";

export type HeaderContainerType = {
    toggleIsFetching: (isFetching: boolean) => void
    setUsers: (users: initialStatePropsType[]) => void
    setUsersTotalCount: (totalCount: number) => void
    setAuthUserData: (userId: null, email: null, login: null) => void
    userId: null,
    email: null,
    login: null,
    isAuth: false


}

export class HeaderContainer extends React.Component <HeaderContainerType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me `, {
            withCredentials: true
        })
            .then(response => {
                debugger
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
    }

    return() {
        return <Header isAuth={false} login={null}/>
    }
}

const mapStateToProps = (state: initialStatePropsType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})
connect(mapStateToProps, {setAuthUserData})(HeaderContainer)

