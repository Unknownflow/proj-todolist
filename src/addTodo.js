import { addToStorage } from "./addToStorage";

export function addTodo() {
	const content = document.getElementById("content");

	const form = document.createElement("form");
	form.setAttribute("method", "get");
	form.setAttribute("action", "/dist/index.html");

	const h1 = document.createElement("h1");
	const h1TextNode = document.createTextNode("Add todo now!");
	h1.appendChild(h1TextNode);
	form.appendChild(h1);

	const inputNames = {
		projectName: "Project Name: ",
		title: "Title: ",
		dueDate: "Due date: ",
		priority: "Priority: ",
		description: "Description: ",
	};

	// goes thru the loop to append all the inputs
	for (var key in inputNames) {
		// create input container to store label & input
		const inputContainer = document.createElement("div");
		inputContainer.classList.add("input-container");

		const newLabel = document.createElement("label");
		newLabel.setAttribute("for", key);
		newLabel.innerHTML = inputNames[key];

		const newInput = document.createElement("input");
		newInput.setAttribute("id", key);
		newInput.setAttribute("type", "text");

		inputContainer.appendChild(newLabel);
		inputContainer.appendChild(newInput);
		form.appendChild(inputContainer);
	}

	// creation of submit button
	const submitButton = document.createElement("button");
	submitButton.setAttribute("id", "submit-button");
	submitButton.setAttribute("type", "submit");
	submitButton.innerHTML = "Add todo!";
	submitButton.addEventListener("click", function () {
		const projectName = document.getElementById("projectName").value;
		const title = document.getElementById("title").value;
		const dueDate = document.getElementById("dueDate").value;
		const priority = document.getElementById("priority").value;
		const description = document.getElementById("description").value;
		addToStorage(projectName, title, dueDate, priority, description);
	});

	form.appendChild(submitButton);
	content.appendChild(form);

	return content;
}
