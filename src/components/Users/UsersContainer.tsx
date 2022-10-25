import React from "react"
import {connect} from "react-redux";
import {
    followAC,
    initialStatePropsType,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    unfollowAC,
    UsersPropsType
} from "../../Redux/users-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import axios from "axios";
import Users from "./Users";

export type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: initialStatePropsType[]) => void
    setTotalUsersCount: (totalCount: number) => void
    setCurrentPage: (pageNumber: number) => void
}
type UsersContainerTyProps = MapDispatchPropsType & MapStatePropsType

type MapStatePropsType = {
    users: UsersPropsType
    pageSize: number
    currentPage: number
    totalUsersCount: number
}

class UsersContainer extends React.Component<UsersContainerTyProps> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize} `).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber:number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize} `).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.usersPage.pageSize,
        totalUsersCount: state.usersPage.usersPage.totalUsersCount,
        currentPage: state.usersPage.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: initialStatePropsType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber:number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);


// export type UserType = {
//     users: initialStatePropsType [];
//     usersPage: UsersPropsType
//     follow: (userId: number) => void
//     unfollow: (userId: number) => void
//     setUsers: (users: initialStatePropsType[]) => void
//     photos: string
//
//     currentPage: number
//     pageSize: number
//     setTotalUsersCount: (totalCount: number) => void
//     setCurrentPage: (pageNumber: number) => void
//
//     totalUsersCount: number
// }
