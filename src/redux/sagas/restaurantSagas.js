import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { setCategories, setMenu, setShortName } from "../actions";

// Saga to fetch categories from the API
function* fetchCategories() {
	try {
		const response = yield call(
			axios.get,
			"https://stream-restaurant-menu-svc.herokuapp.com/category"
		);
		yield put(setCategories(response.data));
	} catch (error) {
		console.error("Fetching categories failed: ", error);
	}
}

// Saga to fetch menu items based on a category short name from the API
function* fetchMenuItems(action) {
	try {
		const response = yield call(
			axios.get,
			`https://stream-restaurant-menu-svc.herokuapp.com/item?category=${action.payload}`
		);
		yield put(setMenu(response.data));
		yield put(setShortName(action.payload));
	} catch (error) {
		console.error("Fetching menu items failed: ", error);
	}
}

// Watcher saga for fetching categories
export function* watchFetchCategories() {
	yield takeEvery("FETCH_CATEGORIES", fetchCategories);
}

// Watcher saga for fetching menu items
export function* watchFetchMenuItems() {
	yield takeEvery("FETCH_MENU_ITEMS", fetchMenuItems);
}
