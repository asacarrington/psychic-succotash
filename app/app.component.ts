import { Component } from '@angular/core';
import { TodoInput } from './todo.component';

@Component({
  selector: 'my-app',
  directives:[TodoInput],
  template: `
  	<h1>ToDo Ang 2 Demo Application</h1><br/><todo-input></todo-input>
  `
})
export class AppComponent { 
		
	constructor(){
		
	}
}
