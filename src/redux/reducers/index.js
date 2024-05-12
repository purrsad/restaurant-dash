import { combineReducers } from "redux";
import { categoriesReducer } from "./categoriesReducer";
import { menuReducer } from "./menuReducer";

export default combineReducers({
	categories: categoriesReducer,
	menu: menuReducer,
});
