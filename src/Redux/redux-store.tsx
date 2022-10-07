import dialogReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})
export type AppStateType = ReturnType<typeof reducers>

const store = createStore(reducers);
export default store

//@ts-ignore
window.store = store