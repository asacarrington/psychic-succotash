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
var StatusSelector = (function () {
    function StatusSelector() {
        this.select = new core_1.EventEmitter();
        this.statuses = ["started", "completed"];
    }
    StatusSelector.prototype.ngOnInit = function () {
        console.log("emit working");
        this.select.emit(this.statuses[0]);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], StatusSelector.prototype, "select", void 0);
    StatusSelector = __decorate([
        core_1.Component({
            selector: 'status-selector',
            template: "  \n\t\t<div>\n\t\t\t<select #sel (change)=\"select.emit($event.target.value)\">\n\t\t\t\t<option *ngFor=\"#status of statuses\">\n\t\t\t\t\t{{status}}\n\t\t\t\t</option>\n\t\t\t</select>\n\t\t</div>\n\t\t"
        }), 
        __metadata('design:paramtypes', [])
    ], StatusSelector);
    return StatusSelector;
}());
exports.StatusSelector = StatusSelector;
//# sourceMappingURL=status-selector.component.js.map