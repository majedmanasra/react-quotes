import {combineReducers} from "redux";
import randomTextsReducer from "./randomTextsReducer";

export default combineReducers({
    randomTexts: randomTextsReducer
})