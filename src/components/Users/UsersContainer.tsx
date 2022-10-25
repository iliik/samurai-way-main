import React from "react"
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, initialStatePropsType, setUsersAC, unfollowAC} from "../../Redux/users-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import axios from "axios";


type MapDispatchPropsType ={
    follow:(userId:number)=>void
    unfollow: (userId:number)=>void
    setUsers: (users:initialStatePropsType[])=>void
    currentPage: number
    pageSize: number
    setTotalUsersCount: (totalCount: number) => void
    totalUsersCount: number
    setCurrentPage: (pageNumber: number) => void
}


class UsersContainer extends React.Component<MapDispatchPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged(pageNumber: number) {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.setCurrentPage(pageNumber)
            })
    }

    render() {
        return <Users
            totalUsersCount = {this.props.totalUsersCount}
            pageSize = {this.props.pageSize}
            currentPage = {this.props.currentPage}
            onPageChanged = {this.onPageChanged}
            follow ={this.props.follow}
            unfollow ={this.props.unfollow}
        />
    }

// let mapStateToProps = (state: AppStateType) => {
//     return {
//         users: state.usersPage.users
//     }
// }
//
// let mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
//     return {
//         follow: (userId:number) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId:number) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users:initialStatePropsType[]) => {
//             dispatch(setUsersAC(users))
//         },
//     }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)