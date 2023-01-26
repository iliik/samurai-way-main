import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {RootStateType} from "../../redux/store";
import {compose, Dispatch} from "redux";
import React from "react";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";


let mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
}

export default compose(WithAuthRedirect,connect(mapStateToProps, mapDispatchToProps))(Dialogs)