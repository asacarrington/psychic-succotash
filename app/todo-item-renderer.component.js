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
var TodoItemRenderer = (function () {
    function TodoItemRenderer() {
        this.toggle = new core_1.EventEmitter();
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TodoItemRenderer.prototype, "todo", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TodoItemRenderer.prototype, "toggle", void 0);
    TodoItemRenderer = __decorate([
        core_1.Component({
            encapsulation: core_1.ViewEncapsulation.None,
            selector: 'todo-item-renderer',
            template: "    <style>\n    \t.completed{\n    \t\ttext-decoration: line-through;\n    \t}\n   \t</style>\n\t\t<span [ngClass]=\"todo.status\">{{todo.title}}</span>\n\t\t<button (click)=\"toggle.emit(todo)\">toggle</button>\n\t\t"
        }), 
        __metadata('design:paramtypes', [])
    ], TodoItemRenderer);
    return TodoItemRenderer;
}());
exports.TodoItemRenderer = TodoItemRenderer;
//# sourceMappingURL=todo-item-renderer.component.js.map