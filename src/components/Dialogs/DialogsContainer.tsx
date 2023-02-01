import {sendMessageCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {RootStateType} from "../../redux/store";
import {compose, Dispatch} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {FC} from "react";
let mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        sendMessage: (newMessageBody:string) => {
            dispatch(sendMessageCreator(newMessageBody))
        },
        // updateNewMessageBody: (body: string) => {
        //     dispatch(updateNewMessageBodyCreator(body));
        // }
    }
}
 export const DialogsContainer = compose<FC>(connect(mapStateToProps, mapDispatchToProps), WithAuthRedirect)(Dialogs)


