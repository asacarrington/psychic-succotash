import { Injectable } from '@angular/core';
import { TodoModel } from './todo.model';

@Injectable()
export class TodoService{
	todos = [
		new TodoModel("eat"),
		new TodoModel("sleep"),
		new TodoModel("code")
		new TodoModel("smooze")
		new TodoModel("smooores")
	];

		addTodo(todo:TodoModel){
		this.todos = [...this.todos, todo];
	}

	toggleTodo(todo:TodoModel){
		console.log(todo);
		//todo.toggle();
		
		const status =
			todo.status == "started" 
			? "completed"
			: "started";

		const toggledTodo = Object.assign({}, todo, {status});

		const i = this.todos.indexOf(todo);
		console.log(i);
		this.todos = [
			...this.todos.slice(0, i), 
			toggledTodo,
			...this.todos.slice(i + 1)
		];
	}
}