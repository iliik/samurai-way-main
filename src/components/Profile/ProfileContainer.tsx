import React, {Component, ComponentType, FC} from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {ProfileType} from "../../redux/store";
import {useParams} from "react-router-dom";



export type ProfileContainerType = MapStateToProps & MapDispatchToProps & {match:{userId: number}}


export function withRouter<T>(Children: ComponentType<T>){
    return function(props: T){
        const match = useParams()
        const newProps = {...props, match}
        return <Children {...newProps}/>
    }
}


class ProfileContainer extends React.Component <ProfileContainerType> {

    componentDidMount() {
        console.log(this.props)
        let userId = this.props.match.userId
        if (!userId) {
            userId = 4
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)

    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        )
    }
}

type MapDispatchToProps = {
    setUserProfile: (profile: null) => void
    getUserProfile: (userId: number) => void
    userId: number
    isAuth: boolean
    updateStatus: () => void
    params: { userId: number }
    getStatus: (userId: number) => void
    status: (status: string) => void
}
type MapStateToProps = {
    profile: ProfileType
    status: string

}

let mapStateToProps = (state: AppStateType): MapStateToProps => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose<FC>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    WithAuthRedirect
     )(ProfileContainer)

