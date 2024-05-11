const CategoriesList = ({ categories, handleCategoryClick }) => {
	return (
		<div className="col-span-3 prose">
			<h2>Menu Categories</h2>
			{categories.length === 0 && <p>Loading...</p>}
			{categories.length !== 0 && (
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
			)}
		</div>
	);
};

export default CategoriesList;
