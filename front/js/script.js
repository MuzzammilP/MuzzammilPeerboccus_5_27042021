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

		
		<a href="./product.html?id=${canape._id}">
			<article>
				<img src="${canape.imageUrl}" alt="${canape.name}"/>
				<h3>${canape.name}</h3>
				<p>${canape.description}</p>
			</article>
		</a>
	`
		)
		.join("");
};

itemsDisplay();
