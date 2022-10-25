import React from "react"
import {connect} from "react-redux";
import {
    followAC,
    initialStatePropsType,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    unfollowAC, UsersPropsType
} from "../../Redux/users-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import Users from "./Users";

export type MapDispatchPropsType ={
    follow:(userId:number)=>void
    unfollow: (userId:number)=>void
    setUsers: (users:initialStatePropsType[])=>void
    setTotalUsersCount: (totalCount: number) => void
    setCurrentPage: (pageNumber: number) => void
}

type MapStatePropsType={
    users:UsersPropsType
    pageSize: number
    currentPage: number
    totalUsersCount: number
}

let mapStateToProps = (state: AppStateType): MapStatePropsType=> {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.usersPage.pageSize,
        totalUsersCount: state.usersPage.usersPage.totalUsersCount,
        currentPage: state.usersPage.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
    return {
        follow: (userId: number) => {dispatch(followAC(userId))},
        unfollow: (userId: number) => {dispatch(unfollowAC(userId))},
        setUsers: (users: initialStatePropsType[]) => {dispatch(setUsersAC(users))},
        setCurrentPage: (pageNumber) => {dispatch(setCurrentPageAC(pageNumber))},
        setTotalUsersCount: (totalCount) => {dispatch(setUsersTotalCountAC(totalCount))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);