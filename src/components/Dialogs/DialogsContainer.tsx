import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {RootStateType} from "../../redux/store";
import {Dispatch} from "redux";
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
let AuthRedirectComponent = WithAuthRedirect(Dialogs)

// Вызвали функцию connect, она вернула нам двойную функцию, и мы вызываем потом ту функцию, который вернул нам предыдущий вызов. Первый вызов настраивает нашу контейнерную компоненту
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer;