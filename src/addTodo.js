import { addTodoToStorage } from "./addTodoToStorage";

export function addTodo() {
	const content = document.getElementById("content");

	const form = document.createElement("form");
	form.setAttribute("method", "get");
	form.setAttribute("action", "/dist/index.html");

	const h1 = document.createElement("h1");
	const h1TextNode = document.createTextNode("Add todo now!");
	h1.appendChild(h1TextNode);
	form.appendChild(h1);

	// id : [label, input type]
	const inputLabels = {
		projectName: ["Project Name: ", "option"],
		title: ["Title: ", "text"],
		dueDate: ["Due date: ", "date"],
		priority: ["Priority (1-5): ", "number"],
		description: ["Description: ", "text"],
	};

	// goes thru the loop to append all the inputs
	for (var key in inputLabels) {
		// create input container to store label & input
		const inputContainer = document.createElement("div");
		inputContainer.classList.add("input-container");

		const newLabel = document.createElement("label");
		newLabel.setAttribute("for", key);
		newLabel.innerHTML = inputLabels[key][0];
		inputContainer.appendChild(newLabel);

		// select option for projectName
		if (key == "projectName") {
			const select = document.createElement("select");
			select.setAttribute("id", "projectName");

			let storage = { ...localStorage };
			let isDefaultFound = false;
			for (var key in storage) {
				if (key == "Default") {
					isDefaultFound = true;
				}
				const option = document.createElement("option");
				option.innerHTML = key;
				option.setAttribute("value", key);
				select.appendChild(option);
			}

			if (!isDefaultFound) {
				// default option
				const option = document.createElement("option");
				option.innerHTML = "Default";
				option.setAttribute("value", "Default");
				select.appendChild(option);
			}

			inputContainer.appendChild(select);
		} else {
			const newInput = document.createElement("input");
			newInput.setAttribute("id", key);
			newInput.setAttribute("type", inputLabels[key][1]);
			newInput.setAttribute("required", "");

			// only for priority input, min: 1st, max: 5th
			if (key === "priority") {
				newInput.min = 1;
				newInput.max = 5;
			}
			inputContainer.appendChild(newInput);
		}

		form.appendChild(inputContainer);
	}

	function areInputsEntered(
		projectName,
		title,
		dueDate,
		priority,
		description
	) {
		// check with any fields are empty, then prevent it from being entered to database
		if (
			projectName == "" ||
			title == "" ||
			dueDate == "" ||
			priority == "" ||
			description == ""
		) {
			return false;
		} else if (priority < 1 || priority > 5) {
			// ensure priority is within the correct range
			return false;
		} else {
			return true;
		}
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
		if (
			areInputsEntered(projectName, title, dueDate, priority, description)
		) {
			addTodoToStorage(
				projectName,
				title,
				dueDate,
				priority,
				description
			);
		}
	});

	form.appendChild(submitButton);
	content.appendChild(form);

	return content;
}
