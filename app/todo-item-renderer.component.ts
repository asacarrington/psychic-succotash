import { Component , Input, ViewEncapsulation, Output, EventEmitter} from '@angular/core';


@Component({
	encapsulation: ViewEncapsulation.None,
    selector: 'todo-item-renderer',
    template: `    <style>
    	.completed{
    		text-decoration: line-through;
    	}
   	</style>
		<span [ngClass]="todo.status">{{todo.title}}</span>
		<button (click)="toggle.emit(todo)">toggle</button>
		`
})
export class TodoItemRenderer{
	@Input() todo;
	@Output() toggle = new EventEmitter();
}