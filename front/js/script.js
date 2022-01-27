let itemsData = [];
console.log(itemsData);

const fetchItems = async () => {
	await fetch("http://localhost:3000/api/products");
};
