import Project from "./Project";

export function addProjectToStorage(projectName) {
	// check if projectName exists
	const result = localStorage.getItem(projectName);

	if (result == null) {
		// create new project
		const project = new Project(projectName, []);
		localStorage.setItem(projectName, JSON.stringify(project));
		return;
	} else {
		const content = document.getElementById("content");
		const p = document.createElement("p");
		p.innerHTML = projectName + " already exists!";
		content.appendChild(p);
		return content;
	}
}
