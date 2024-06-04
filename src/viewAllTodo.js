export function viewAllTodo() {
	let storage = { ...localStorage };

	// nothing in storage
	if (storage === null) {
		return;
	}

	const content = document.getElementById("content");

	const h1 = document.createElement("h1");
	const h1TextNode = document.createTextNode("Viewing all Todos");

	const table = document.createElement("table");
	const th = document.createElement("th");

	console.log(storage);
}
