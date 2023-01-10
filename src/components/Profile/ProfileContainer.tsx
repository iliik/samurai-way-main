import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profile-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {withRouter} from "react-router-dom";


export type ProfileContainerType = MapStateToProps & MapDispatchToProps


class ProfileContainer extends React.Component <ProfileContainerType> {

    componentDidMount() {
        let userId = this.props.children
        if(!userId){
            userId = 2
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

type MapDispatchToProps = {
    setUserProfile: (profile: null) => void

}
type MapStateToProps = {
    profile: null
}
let mapStateToProps = (state: AppStateType): MapStateToProps => ({
    profile: state.profilePage.profile
})

// @ts-ignore
let WithUrlDataContainerComponent = withRouter <MapStateToProps, MapDispatchToProps> (ProfileContainer)

export default connect<MapStateToProps, MapDispatchToProps, {}, AppStateType>(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)