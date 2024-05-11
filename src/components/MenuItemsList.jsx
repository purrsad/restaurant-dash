const MenuItemsList = ({ shortName, menu }) => {
	return (
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
	);
};

export default MenuItemsList;
