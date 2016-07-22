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
var todo_item_renderer_component_1 = require('./todo-item-renderer.component');
var started_pipe_1 = require('./started.pipe');
var search_pipe_1 = require('./search.pipe');
var TodoList = (function () {
    function TodoList(todoService) {
        this.todoService = todoService;
        console.log(todoService);
    }
    TodoList.prototype.onMouseOver = function (value) {
        this.todoService.addTodo(this.todoModel);
        console.log(this.todoService.todos);
    };
    TodoList.prototype.onClick = function (event, value) {
        console.log(event, value);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TodoList.prototype, "status", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TodoList.prototype, "term", void 0);
    TodoList = __decorate([
        core_1.Component({
            selector: 'todo-list',
            pipes: [started_pipe_1.StartedPipe, search_pipe_1.SearchPipe],
            directives: [todo_item_renderer_component_1.TodoItemRenderer],
            template: "\n    <div>\n    \t<ul>\n    \t\t<li *ngFor=\"let todo of todoService.todos | started : status | search : term\">\n    \t\t\t<todo-item-renderer [todo]=\"todo\"\n    \t\t\t\t(toggle)=\"todoService.toggleTodo($event)\"\n    \t\t\t></todo-item-renderer>\n    \t\t</li>\n    \t</ul>\n    </div>\n    <div class=\"completed\">{{todoService.todos}}</div>\n    "
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService])
    ], TodoList);
    return TodoList;
}());
exports.TodoList = TodoList;
//# sourceMappingURL=todo-list.component.js.map