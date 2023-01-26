import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {RootStateType} from "../../redux/store";
import {compose, Dispatch} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

 export const DialogsContainer = () => {
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
    compose(WithAuthRedirect,connect(mapStateToProps, mapDispatchToProps))(Dialogs)

}
