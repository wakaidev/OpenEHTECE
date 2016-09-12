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
var index_1 = require('../script/index');
var SidebarComponent = (function () {
    function SidebarComponent(scriptService) {
        this.scriptService = scriptService;
    }
    SidebarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-sidebar',
            templateUrl: 'sidebar.component.html',
            styleUrls: ['sidebar.component.css'],
        }), 
        __metadata('design:paramtypes', [index_1.ScriptService])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHNCQUE4QixpQkFBaUIsQ0FBQyxDQUFBO0FBU2hEO0lBQ0ksMEJBQW9CLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBQUcsQ0FBQztJQVJ4RDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUN2QyxDQUFDOzt3QkFBQTtJQUlGLHVCQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSx3QkFBZ0IsbUJBRTVCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTY3JpcHRTZXJ2aWNlIH0gZnJvbSAnLi4vc2NyaXB0L2luZGV4JztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3NkLXNpZGViYXInLFxuICAgIHRlbXBsYXRlVXJsOiAnc2lkZWJhci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3NpZGViYXIuY29tcG9uZW50LmNzcyddLFxufSlcblxuZXhwb3J0IGNsYXNzIFNpZGViYXJDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2NyaXB0U2VydmljZTogU2NyaXB0U2VydmljZSkge31cbn0iXX0=
