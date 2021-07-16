import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import RegisterReducer from "./RegisterReducer";
const reducers = combineReducers({
  login: LoginReducer,
  register: RegisterReducer,
});

export default reducers;
