import { combineReducers } from "redux";

// Reducers
import auth from "./auth";
import table from "./table";

export default combineReducers({ auth, table });
