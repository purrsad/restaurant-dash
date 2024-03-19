import { useState, useEffect } from "react";
import axios from "axios";

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
		<div className="p-4">
			<div className="grid grid-cols-8">
				<div className="col-span-3 prose">
					<h2>Menu Categories</h2>
					<ul>
						{categories.map((category) => (
							<li key={category.id} className="my-0">
								<a
									className="link link-hover"
									onClick={() =>
										handleCategoryClick(category.short_name)
									}
								>
									{category.name} - ({category.short_name})
								</a>
							</li>
						))}
					</ul>
				</div>

				{menu.length !== 0 && (
					<div className="col-span-5 prose">
						<h3>Items in Category: ({shortName})</h3>
						<table className="table">
							<thead>
								<tr>
									<th>Name</th>
									<th>Description</th>
								</tr>
							</thead>
							<tbody>
								{menu.map((item) => (
									<tr key={item.id}>
										<td>{item.name}</td>
										<td>{item.description}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				)}
			</div>
		</div>
	);
}

export default App;
