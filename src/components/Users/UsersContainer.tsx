import React, {FC} from "react"
import {connect} from "react-redux";
import {
    followSuccess, PhotosType,
    requestUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unfollowSuccess,
    UserType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers, getUserSelector
} from "../../redux/users-selectors";


export type MapStatePropsType = {
    users: UserType[]
    pageSize: number
    currentPage: number
    totalUsersCount: number
    isFetching: boolean
    followingInProgress: number[]
    user: {
        id: number
        name: string
        status: string
        photos: PhotosType
        followed: boolean
    }

}

type UsersContainerTyProps = MapDispatchPropsType & MapStatePropsType

class UsersContainer extends React.Component<UsersContainerTyProps> {
    componentDidMount() {
        this.props.getUser(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUser(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users user={this.props.user}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        user: getUserSelector(state),
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    } as MapStatePropsType
}


export default compose<FC>(
    connect(mapStateToProps, {
        follow: followSuccess, unfollow: unfollowSuccess, setCurrentPage,
        toggleFollowingProgress, getUser: requestUsers
    }))(UsersContainer);


export type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUser: (currentPage: number, pageSize: number) => void
}
