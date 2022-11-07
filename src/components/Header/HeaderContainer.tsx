import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {initialStatePropsType} from "../../Redux/users-reducer";
import {connect} from "react-redux";
import {setAuthUserData} from "../../Redux/auth-reducer";

type HeaderContainerType = {
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
                if (response.data.resultCode === 0) {
                    let {userId, email, login} = response.data.data
                    this.props.setAuthUserData(userId, email, login)
                }
            })
    }

    return() {
        return <Header />
    }
}

const mapStateToProps = (state: initialStatePropsType) => ({})
connect(mapStateToProps, {setAuthUserData})(HeaderContainer)