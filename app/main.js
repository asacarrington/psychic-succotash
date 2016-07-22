"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var todo_service_1 = require('./todo.service');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [todo_service_1.TodoService]).then(function () { return console.log('app is running...'); }, function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map