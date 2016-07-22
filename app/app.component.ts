import { Component } from '@angular/core';
import { TodoInput } from './todo.component';

@Component({
  selector: 'my-app',
  directives:[TodoInput],
  template: `
  	<h1><todo-input></todo-input>My First Angular 23App</h1>
  `
})
export class AppComponent { 
		
	constructor(){
		
	}
}
