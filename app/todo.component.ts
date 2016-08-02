import { Component } from '@angular/core';
import { TodoService } from './todo.service';
import { TodoList } from './todo-list.component';
import { TodoModel } from './todo.model';
import { StatusSelector } from './status-selector.component';
import { SearchBox } from './search-box.component';

@Component({
    selector: 'todo-input',
    directives:[TodoList, StatusSelector, SearchBox],
    template: `
    <search-box (update)="myterm = $event"></search-box>
 	<status-selector (select)="mystatus = $event"></status-selector>
    <todo-list [status]="mystatus" [term]="myterm"></todo-list>
    <form (submit)="onSubmit()">
    <input type="text" [(ngModel)]="todoModel.title">
    </form>

    <button (click)="onMouseOver()">Add</button>
    <button (mouseover)="onClick($event, todoModel.title)">click me</button>
    `
})
export class TodoInput{
	
	todoModel: TodoModel = new TodoModel();
	constructor(public todoService:TodoService){
		console.log(todoService)
	}

	onMouseOver(){
	}

	onSubmit(){
		this.todoService.addTodo(this.todoModel);
		console.log(this.todoService.todos);
		this.todoModel = new TodoModel();
	}

	onClick(event, value){
		console.log(event, value);
	}

}