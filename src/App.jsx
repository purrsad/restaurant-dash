import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoriesList from "./components/CategoriesList";
import MenuItemsList from "./components/MenuItemsList";
import { fetchCategories, fetchMenuItems } from "./redux/actions";

function App() {
	const categories = useSelector((state) => state.categories.categories);
	const menu = useSelector((state) => state.menu.menu);
	const shortName = useSelector((state) => state.menu.shortName);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCategories());
	}, [dispatch]);

	const handleCategoryClick = (short_name) => {
		dispatch(fetchMenuItems(short_name));
	};

	return (
		<div className="container mx-auto">
			<div className="p-4">
				<div className="grid grid-cols-8">
					<CategoriesList
						categories={categories}
						handleCategoryClick={handleCategoryClick}
					/>

					{menu.length !== 0 && (
						<MenuItemsList shortName={shortName} menu={menu} />
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
