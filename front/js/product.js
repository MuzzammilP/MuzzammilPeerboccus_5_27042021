let params = new URL(window.location.href).searchParams;
let id = params.get("id");

const image = document.getElementsByClassName("item__img");
const title = document.getElementById("title");
const price = document.getElementById("price");
const description = document.getElementById("description");
const colors = document.getElementById("colors");

fetch("http://localhost:3000/api/products/" + id)
	.then((res) => res.json())
	.then((data) => {
		image[0].innerHTML = `<img src="${data.imageUrl}" alt="${data.name}">`;
		title.innerHTML = `<h1>${data.name}</h1>`;
		price.innerText = `${data.price}`;
		description.innerText = `${data.description}`;

		for (number in data.colors) {
			colors.options[colors.options.length] = new Option(
				data.colors[number],
				data.colors[number]
			);
		}
	});
