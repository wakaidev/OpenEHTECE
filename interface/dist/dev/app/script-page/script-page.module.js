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
var common_1 = require('@angular/common');
var shared_module_1 = require('../shared/shared.module');
var script_page_component_1 = require('./script-page.component');
var index_1 = require('../shared/script/index');
var ScriptPageModule = (function () {
    function ScriptPageModule() {
    }
    ScriptPageModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, shared_module_1.SharedModule],
            declarations: [script_page_component_1.ScriptPageComponent],
            exports: [script_page_component_1.ScriptPageComponent],
            providers: [index_1.ScriptService]
        }), 
        __metadata('design:paramtypes', [])
    ], ScriptPageModule);
    return ScriptPageModule;
}());
exports.ScriptPageModule = ScriptPageModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zY3JpcHQtcGFnZS9zY3JpcHQtcGFnZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyw4QkFBNkIseUJBQXlCLENBQUMsQ0FBQTtBQUN2RCxzQ0FBb0MseUJBQXlCLENBQUMsQ0FBQTtBQUM5RCxzQkFBOEIsd0JBQXdCLENBQUMsQ0FBQTtBQVF2RDtJQUFBO0lBQWdDLENBQUM7SUFOakM7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxxQkFBWSxFQUFFLDRCQUFZLENBQUM7WUFDckMsWUFBWSxFQUFFLENBQUMsMkNBQW1CLENBQUM7WUFDbkMsT0FBTyxFQUFFLENBQUMsMkNBQW1CLENBQUM7WUFDOUIsU0FBUyxFQUFFLENBQUMscUJBQWEsQ0FBQztTQUMzQixDQUFDOzt3QkFBQTtJQUM4Qix1QkFBQztBQUFELENBQWhDLEFBQWlDLElBQUE7QUFBcEIsd0JBQWdCLG1CQUFJLENBQUEiLCJmaWxlIjoiYXBwL3NjcmlwdC1wYWdlL3NjcmlwdC1wYWdlLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgU2NyaXB0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vc2NyaXB0LXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFNjcmlwdFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2NyaXB0L2luZGV4JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgU2hhcmVkTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbU2NyaXB0UGFnZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtTY3JpcHRQYWdlQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbU2NyaXB0U2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgU2NyaXB0UGFnZU1vZHVsZSB7IH1cbiJdfQ==
