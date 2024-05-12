import { all } from "redux-saga/effects";
import { watchFetchCategories, watchFetchMenuItems } from "./restaurantSagas";

// Root saga that combines all other sagas
export default function* rootSaga() {
	yield all([watchFetchCategories(), watchFetchMenuItems()]);
}
