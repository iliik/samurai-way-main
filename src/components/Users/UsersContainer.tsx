import React from "react"
import {connect} from "react-redux";
import {
    follow,
    initialStatePropsType,
    setCurrentPage,
    setUsers,
    setUsersTotalCount, toggleFollowingProgress,
    toggleIsFetching,
    unfollow
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/Api";


type MapStatePropsType = {
    users: initialStatePropsType[]
    pageSize: number
    currentPage: number
    totalUsersCount: number
    isFetching: boolean
    followingInProgress:[]
}

type UsersContainerTyProps = MapDispatchPropsType & MapStatePropsType

class UsersContainer extends React.Component<UsersContainerTyProps> {
    componentDidMount() {
        this.props.toggleIsFetching(true)

            usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setUsersTotalCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.toggleIsFetching(false)
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                toggleFollowingProgress={ this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress
    }
}
export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsFetching,
    toggleFollowingProgress
})(UsersContainer);

export type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: initialStatePropsType[]) => void
    setUsersTotalCount: (totalCount: number) => void
    setCurrentPage: (pageNumber: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress:(isFetching: boolean,userId: number)=>void
}
