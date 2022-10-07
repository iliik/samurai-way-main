import React from "react"
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, initialStatePropsType, setUsersAC, unfollowAC, UsersPropsType} from "../../Redux/users-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";


type MapStatePropsType = {
    usersPage:UsersPropsType
}
type MapDispatchPropsType ={
    follow:(userId:number)=>void
    unfollow: (userId:number)=>void
    setUsers: (users:initialStatePropsType[])=>void
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
    return {
        follow: (userId:number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId:number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users:initialStatePropsType[]) => {
            dispatch(setUsersAC(users))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users)