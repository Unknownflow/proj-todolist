import { addToStorage } from "./addToStorage";

export function addTodo() {
	const content = document.getElementById("content");

	const h1 = document.createElement("h1");
	const h1TextNode = document.createTextNode("Add todo now!");
	h1.appendChild(h1TextNode);

	const form = document.createElement("form");
	form.setAttribute("method", "get");
	form.setAttribute("action", "/dist/index.html");

	const inputContainer1 = document.createElement("div");
	inputContainer1.classList.add("input-container");
	const inputContainer2 = document.createElement("div");
	inputContainer2.classList.add("input-container");
	const inputContainer3 = document.createElement("div");
	inputContainer3.classList.add("input-container");
	const inputContainer4 = document.createElement("div");
	inputContainer4.classList.add("input-container");
	const inputContainer5 = document.createElement("div");
	inputContainer5.classList.add("input-container");

	const projectNameLabel = document.createElement("label");
	projectNameLabel.setAttribute("for", "projectName");
	projectNameLabel.innerHTML = "Project Name: ";

	const titleLabel = document.createElement("label");
	titleLabel.setAttribute("for", "title");
	titleLabel.innerHTML = "Title: ";

	const descriptionLabel = document.createElement("label");
	descriptionLabel.setAttribute("for", "description");
	descriptionLabel.innerHTML = "Description: ";

	const dueDateLabel = document.createElement("label");
	dueDateLabel.setAttribute("for", "dueDate");
	dueDateLabel.innerHTML = "Due date: ";

	const priorityLabel = document.createElement("label");
	priorityLabel.setAttribute("for", "priority");
	priorityLabel.innerHTML = "Priority: ";

	const projectNameInput = document.createElement("input");
	projectNameInput.setAttribute("id", "projectName");
	projectNameInput.setAttribute("type", "text");

	const titleInput = document.createElement("input");
	titleInput.setAttribute("id", "title");
	titleInput.setAttribute("type", "text");

	const dueDateInput = document.createElement("input");
	dueDateInput.setAttribute("id", "dueDate");
	dueDateInput.setAttribute("type", "text");

	const priorityInput = document.createElement("input");
	priorityInput.setAttribute("id", "priority");
	priorityInput.setAttribute("type", "text");

	const descriptionInput = document.createElement("textarea");
	descriptionInput.setAttribute("id", "description");
	descriptionInput.setAttribute("type", "text");

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

	inputContainer1.appendChild(projectNameLabel);
	inputContainer1.appendChild(projectNameInput);
	inputContainer2.appendChild(titleLabel);
	inputContainer2.appendChild(titleInput);
	inputContainer3.appendChild(dueDateLabel);
	inputContainer3.appendChild(dueDateInput);
	inputContainer4.appendChild(priorityLabel);
	inputContainer4.appendChild(priorityInput);
	inputContainer5.appendChild(descriptionLabel);
	inputContainer5.appendChild(descriptionInput);

	form.appendChild(h1);
	form.appendChild(inputContainer1);
	form.appendChild(inputContainer2);
	form.appendChild(inputContainer3);
	form.appendChild(inputContainer4);
	form.appendChild(inputContainer5);
	form.appendChild(submitButton);

	content.appendChild(form);

	return content;
}
