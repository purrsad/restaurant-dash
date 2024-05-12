import axios from "axios";

/* export const fetchCategories = () => (dispatch) => {
	return axios
		.get("https://stream-restaurant-menu-svc.herokuapp.com/category")
		.then((response) => dispatch(setCategories(response.data)))
		.catch((error) => console.error("Fetching categories failed: ", error));
};

export const fetchMenuItems = (short_name) => (dispatch) => {
	return axios
		.get(
			`https://stream-restaurant-menu-svc.herokuapp.com/item?category=${short_name}`
		)
		.then((response) => {
			dispatch(setMenu(response.data));
			dispatch(setShortName(short_name));
		})
		.catch((error) => console.error("Fetching menu items failed: ", error));
}; */

// Category actions
export const fetchCategories = () => ({
	type: "FETCH_CATEGORIES",
});

export const setCategories = (categories) => ({
	type: "SET_CATEGORIES",
	payload: categories,
});

// Menu actions
export const fetchMenuItems = (shortName) => ({
	type: "FETCH_MENU_ITEMS",
	payload: shortName,
});

export const setMenu = (menu) => ({
	type: "SET_MENU",
	payload: menu,
});

export const setShortName = (shortName) => ({
	type: "SET_SHORT_NAME",
	payload: shortName,
});
