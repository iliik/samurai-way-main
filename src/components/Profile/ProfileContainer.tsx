import React, {ComponentType, FC} from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {ProfileType} from "../../redux/store";
import {useParams} from "react-router-dom";


export type ProfileContainerType = MapStateToProps & MapDispatchToProps & { match: { userId: number } }


export function withRouter<T>(Children: ComponentType<T>) {
    return function (props: T) {
        const match = useParams()
        const newProps = {...props, match}
        return <Children {...newProps}/>
    }
}


class ProfileContainer extends React.Component <ProfileContainerType> {

    refreshProfile() {
        let userId = this.props.match.userId
        if (!userId) {
            userId = this.props.authorizedUserId as number
            // if (!userId) {
            //     this.props.history.push('/login')
            // }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }


    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerType>, prevState: Readonly<{}>) {
        if (this.props.match.userId != prevProps.match.userId) {
            this.refreshProfile();
        }

    }

    render() {
        return (
            <Profile
                {...this.props}
                savePhoto={this.props.savePhoto}
                isOwner={!this.props.match.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                saveProfile={this.props.saveProfile}/>
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
    authorizedUserId?: number | null
    isAuth: boolean | null
    isOwner: boolean
    savePhoto: any
    saveProfile: any
}

let mapStateToProps = (state: AppStateType): MapStateToProps => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
    isOwner: state.profilePage.isOwner,
    savePhoto: state.profilePage.savePhoto,
    saveProfile: state.profilePage.saveProfile
})

export default compose<FC>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto,saveProfile}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)

