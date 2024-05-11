import { useState, useEffect } from "react";
import axios from "axios";
import CategoriesList from "./components/CategoriesList";
import MenuItemsList from "./components/MenuItemsList";

function App() {
	const baseURL = "https://stream-restaurant-menu-svc.herokuapp.com/";
	const [categories, setCategories] = useState([]);
	const [menu, setMenu] = useState([]);
	const [shortName, setShortName] = useState("");

	const handleCategoryClick = (short_name) => {
		axios.get(baseURL + "/item?category=" + short_name).then((res) => {
			setMenu(res.data);
			setShortName(short_name);
		});
	};

	useEffect(() => {
		axios.get(baseURL + "category").then((res) => {
			setCategories(res.data);
		});
	}, []);

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
