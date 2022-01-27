let itemsData = [];

const fetchItems = async () => {
	await fetch("http://localhost:3000/api/products").then((res) => console.log(res.json()));
};

fetchItems();
