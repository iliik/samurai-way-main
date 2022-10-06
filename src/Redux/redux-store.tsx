import dialogReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebar: sidebarReducer
})

let store = createStore(reducers);

export default store

//@ts-ignore
window.store = store