let itemsData = [];

const fetchItems = async () => {
	await fetch("http://localhost:3000/api/products")
		.then((res) => res.json())

		.then((promiseItems) => {
			itemsData = promiseItems;
			console.log(itemsData);
		});
};

const itemsDisplay = async () => {
	await fetchItems();

	document.getElementById("items").innerHTML = itemsData
		.map(
			(canape) => `
	<div class="items id="items${canape._id}">
		<a>
			<article>
				<img src="${canape.imageUrl}"/>
				<h3>${canape.name}</h3>
				<p>${canape.description}</p>
			</article>
		</a>
	</div>
	`
		)
		.join("");
};

itemsDisplay();
