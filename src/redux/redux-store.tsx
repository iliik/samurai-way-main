
import sidebarReducer from "./sidebar-reducer";
import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import dialogReducer from "./dialogs-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth:authReducer
})
export type AppStateType = ReturnType<typeof reducers>

const store = createStore(reducers);
export default store

//@ts-ignore
window.store = store