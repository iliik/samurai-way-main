import React from "react"
import {connect} from "react-redux";
import {
    followAC,
    initialStatePropsType,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    toggleIsFetchingAC,
    unfollowAC
} from "../../Redux/users-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";


export type MapDispatchPropsType = {
    followAC: (userId: number) => void
    unfollowAC: (userId: number) => void
    setUsersAC: (users: initialStatePropsType[]) => void
    setTotalUsersCountAC: (totalCount: number) => void
    setCurrentPageAC: (pageNumber: number) => void
    toggleIsFetchingAC: (isFetching: boolean) => void
}

type MapStatePropsType = {
    users: initialStatePropsType[]
    pageSize: number
    currentPage: number
    totalUsersCount: number
    isFetching: boolean
}

type UsersContainerTyProps = MapDispatchPropsType & MapStatePropsType

class UsersContainer extends React.Component<UsersContainerTyProps> {
    componentDidMount() {
        this.props.toggleIsFetchingAC(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize} `).then(response => {
            this.props.toggleIsFetchingAC(false)
            this.props.setUsersAC(response.data.items)
            this.props.setTotalUsersCountAC(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber:number) => {
        this.props.setCurrentPageAC(pageNumber)
        this.props.toggleIsFetchingAC(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize} `).then(response => {
            this.props.setUsersAC(response.data.items)
            this.props.toggleIsFetchingAC(false)
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
                follow={this.props.followAC}
                unfollow={this.props.unfollowAC}
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
    }
}

/*let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
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
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        },
        toggleIsFetchingAC: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        },
    }
}*/

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
    followAC, unfollowAC, setUsersAC, setCurrentPageAC, setUsersTotalCountAC, toggleIsFetchingAC
})(UsersContainer);

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
