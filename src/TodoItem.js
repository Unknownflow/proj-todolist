class TodoItem {
	constructor(title, dueDate, priority, description, isDone = false) {
		this.title = title;
		this.dueDate = dueDate;
		this.priority = priority;
		this.description = description;
		this.isDone = isDone;
	}
}

export default TodoItem;
