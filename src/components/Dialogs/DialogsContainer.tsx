import {sendMessageCreator} from "../../Redux/dialogs-reducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";


let mapStateToProps = (state: any) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispathcToProps = (dispatch: any) => {
    return {
        updateNewMessageBody: () => {
            dispatch(sendMessageCreator())
        },
        sendMessage: (body: any) => {
            dispatch(sendMessageCreator(body));
        }
    }
}


// Вызвали функцию connect, она вернула нам двойную функцию, и мы вызываем потом ту функцию, который вернул нам предыдущий вызов. Первый вызов настраивает нашу контейнерную компоненту
const DialogsContainer = connect(mapStateToProps,mapDispathcToProps)(Dialogs)

export default DialogsContainer;