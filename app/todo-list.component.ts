import { Component, Input } from '@angular/core';
import { TodoService } from './todo.service';
import { TodoItemRenderer } from './todo-item-renderer.component';
import { StartedPipe } from './started.pipe';
import { SearchPipe } from './search.pipe';

@Component({
    selector: 'todo-list',
    pipes:[StartedPipe, SearchPipe],
    directives:[TodoItemRenderer],
    template: `
    <div>
    	<ul>
    		<li *ngFor="let todo of todoService.todos | started : status | search : term">
    			<todo-item-renderer [todo]="todo"
    				(toggle)="todoService.toggleTodo($event)"
    			></todo-item-renderer>
    		</li>
    	</ul>
    </div>
    <div class="completed">{{todoService.todos}}</div>
    `
})
export class TodoList{
	@Input() status;
	@Input() term;
	constructor(public todoService:TodoService){
		console.log(todoService)
	}

	onMouseOver(value){
		this.todoService.addTodo(this.todoModel);
		console.log(this.todoService.todos);
	}

	onClick(event, value){
		console.log(event, value);
	}

}