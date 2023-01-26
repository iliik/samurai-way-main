import React from "react"
import {connect} from "react-redux";
import {
    followSuccess,
    getUser,
    initialStatePropsType,
    setCurrentPage,
    toggleFollowingProgress,
    unfollowSuccess
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


type MapStatePropsType = {
    users: initialStatePropsType[]
    pageSize: number
    currentPage: number
    totalUsersCount: number
    isFetching: boolean
    followingInProgress: []
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
            <Users
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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
export default compose(
    WithAuthRedirect,
    connect(mapStateToProps, {
        follow: followSuccess, unfollow: unfollowSuccess, setCurrentPage,
        toggleFollowingProgress, getUser
    }))(UsersContainer);


export type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUser: (currentPage: number, pageSize: number) => void
}
