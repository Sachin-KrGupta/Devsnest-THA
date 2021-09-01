import { combineReducers } from "redux";
import {changeUserName, changeEmail} from './changeReducer'

const rootReducer = combineReducers({
    userChanger: changeUserName,
    emailChanger: changeEmail,
});

export default rootReducer;