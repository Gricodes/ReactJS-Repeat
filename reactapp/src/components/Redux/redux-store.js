import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";

let reducers = combineReducers({
    profilePageR:profileReducer,
    dialogPageR:dialogReducer
});

let store = createStore(reducers);

window.store = store;

export default store;

