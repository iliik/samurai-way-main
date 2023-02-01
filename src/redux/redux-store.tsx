import sidebarReducer from "./sidebar-reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import dialogReducer from "./dialogs-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})
export type AppStateType = ReturnType<typeof reducers>

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store

//@ts-ignore
window.store = store