"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var todo_service_1 = require('./todo.service');
var todo_list_component_1 = require('./todo-list.component');
var todo_model_1 = require('./todo.model');
var status_selector_component_1 = require('./status-selector.component');
var search_box_component_1 = require('./search-box.component');
var TodoInput = (function () {
    function TodoInput(todoService) {
        this.todoService = todoService;
        this.todoModel = new todo_model_1.TodoModel();
        console.log(todoService);
    }
    TodoInput.prototype.onMouseOver = function () {
        this.todoService.addTodo(this.todoModel);
        console.log(this.todoService.todos);
    };
    TodoInput.prototype.onSubmit = function () {
        this.todoService.addTodo(this.todoModel);
        console.log(this.todoService.todos);
        this.todoModel = new todo_model_1.TodoModel();
    };
    TodoInput.prototype.onClick = function (event, value) {
        console.log(event, value);
    };
    TodoInput = __decorate([
        core_1.Component({
            selector: 'todo-input',
            directives: [todo_list_component_1.TodoList, status_selector_component_1.StatusSelector, search_box_component_1.SearchBox],
            template: "\n    <search-box (update)=\"myterm = $event\"></search-box>\n \t<status-selector (select)=\"mystatus = $event\"></status-selector>\n    <todo-list [status]=\"mystatus\" [term]=\"myterm\"></todo-list>\n    <form (submit)=\"onSubmit()\">\n    <input type=\"text\" [(ngModel)]=\"todoModel.title\">\n    </form>\n\n    <button (click)=\"onMouseOver()\">Add</button>\n    <button (mouseover)=\"onClick($event, todoModel.title)\">click me</button>\n    <div>I'm a todo input</div>"
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService])
    ], TodoInput);
    return TodoInput;
}());
exports.TodoInput = TodoInput;
//# sourceMappingURL=todo.component.js.map