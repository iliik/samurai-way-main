import React from "react"
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../Redux/users-reducer";

let mapStateToProps = (state: any) => {
    return {
        users: state.usrsPage.users
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId:number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId:number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users:number) => {
            dispatch(setUsersAC(users))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users)