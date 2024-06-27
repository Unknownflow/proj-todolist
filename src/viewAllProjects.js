export function viewAllProjects() {
	// function returns true if the storage has no values stored
	const isObjectEmpty = (objectName) => {
		return (
			Object.keys(objectName).length === 0 &&
			objectName.constructor === Object
		);
	};

	const content = document.getElementById("content");

	// generating headers text
	const h1 = document.createElement("h1");
	const h1TextNode = document.createTextNode("Viewing all Projects");
	h1.appendChild(h1TextNode);
	content.appendChild(h1);

	let storage = { ...localStorage };
	console.log(storage);
	// if storage is empty, return valid value
	if (isObjectEmpty(storage)) {
		const p = document.createElement("p");
		p.innerHTML = "There are currently no projects found!";
		content.appendChild(p);
		return;
	}

	const div = document.createElement("div");
	div.classList = "view-project-list";
	const ol = document.createElement("ol");
	let count = 1;

	content.appendChild(div);
	for (var key in storage) {
		const li = document.createElement("li");
		li.innerHTML = key;
		ol.appendChild(li);
		count++;
	}

	div.appendChild(ol);
	content.appendChild(div);
	return content;
}
