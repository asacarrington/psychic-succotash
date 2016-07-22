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
var todo_model_1 = require('./todo.model');
var TodoService = (function () {
    function TodoService() {
        this.todos = [
            new todo_model_1.TodoModel("eat"),
            new todo_model_1.TodoModel("sleep"),
            new todo_model_1.TodoModel("code"),
            new todo_model_1.TodoModel("smooze"),
            new todo_model_1.TodoModel("smooores")
        ];
    }
    TodoService.prototype.addTodo = function (todo) {
        this.todos = this.todos.concat([todo]);
    };
    TodoService.prototype.toggleTodo = function (todo) {
        console.log(todo);
        //todo.toggle();
        var status = todo.status == "started"
            ? "completed"
            : "started";
        var toggledTodo = Object.assign({}, todo, { status: status });
        var i = this.todos.indexOf(todo);
        console.log(i);
        this.todos = this.todos.slice(0, i).concat([
            toggledTodo
        ], this.todos.slice(i + 1));
    };
    TodoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TodoService);
    return TodoService;
}());
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map