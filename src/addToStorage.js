import TodoItem from "./TodoItem";

export function addToStorage(title, dueDate, priority, description) {
	const newTodoItem = new TodoItem(title, dueDate, priority, description);
	localStorage.setItem(1, JSON.stringify(newTodoItem));
	console.log(JSON.parse(localStorage.getItem(type)));
}
