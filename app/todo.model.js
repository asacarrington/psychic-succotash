"use strict";
var TodoModel = (function () {
    function TodoModel(title) {
        if (title === void 0) { title = ""; }
        this.title = title;
        this.status = "started";
    }
    TodoModel.prototype.toggle = function () {
        this.status =
            this.status == "started"
                ? this.status = "completed"
                : this.status = "started";
    };
    return TodoModel;
}());
exports.TodoModel = TodoModel;
//# sourceMappingURL=todo.model.js.map