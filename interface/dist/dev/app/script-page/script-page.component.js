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
var router_1 = require('@angular/router');
var index_1 = require('../shared/index');
var ScriptPageComponent = (function () {
    function ScriptPageComponent(route, scriptService) {
        var _this = this;
        this.route = route;
        this.scriptService = scriptService;
        this.item = [];
        this.view = 'settings';
        this.tabs = index_1.TABS;
        this.scriptRunning = false;
        this.sub = this.route.params.subscribe(function (params) {
            var id = parseInt(params['id']);
            _this.script = _this.getScriptById(id);
        });
    }
    ScriptPageComponent.prototype.getScriptById = function (id) {
        for (var i = 0; i < index_1.SCRIPTS.length; i++) {
            if (index_1.SCRIPTS[i].id === id) {
                return index_1.SCRIPTS[i];
            }
        }
    };
    ScriptPageComponent.prototype.viewIs = function (view) {
        return this.view === view;
    };
    ScriptPageComponent.prototype.setView = function (view) {
        this.view = view;
    };
    ScriptPageComponent.prototype.addItem = function () {
        var item = new index_1.Item();
        item.site.name = this.script.name;
        item.site.id = this.script.id;
        for (var i = 0; i < this.script.item.length; i++) {
            item.properties.push({
                attribute: this.script.item[i].name,
                value: this.item[i]
            });
        }
        this.scriptService.addToCart(item);
        this.item = [];
    };
    ScriptPageComponent.prototype.startScript = function () {
        this.scriptRunning = true;
        this.scriptService.runScript(this.script);
    };
    ScriptPageComponent.prototype.stopScript = function () {
        this.scriptRunning = false;
        this.scriptService.stopScript(this.script);
    };
    ScriptPageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-script-page',
            templateUrl: 'script-page.component.html',
            styleUrls: ['script-page.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, index_1.ScriptService])
    ], ScriptPageComponent);
    return ScriptPageComponent;
}());
exports.ScriptPageComponent = ScriptPageComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zY3JpcHQtcGFnZS9zY3JpcHQtcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBK0IsaUJBQWlCLENBQUMsQ0FBQTtBQUNqRCxzQkFBMkQsaUJBQWlCLENBQUMsQ0FBQTtBQVM3RTtJQVFJLDZCQUFvQixLQUFxQixFQUNyQixhQUE0QjtRQVRwRCxpQkF1REM7UUEvQ3VCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBTnhDLFNBQUksR0FBVSxFQUFFLENBQUM7UUFDakIsU0FBSSxHQUFXLFVBQVUsQ0FBQztRQUMxQixTQUFJLEdBQUcsWUFBSSxDQUFDO1FBQ1osa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFJbkMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ3pDLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNoQyxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsMkNBQWEsR0FBYixVQUFjLEVBQVU7UUFDcEIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxlQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDdEMsRUFBRSxDQUFDLENBQUMsZUFBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixNQUFNLENBQUMsZUFBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQztJQUVELG9DQUFNLEdBQU4sVUFBTyxJQUFZO1FBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDO0lBQzlCLENBQUM7SUFFRCxxQ0FBTyxHQUFQLFVBQVEsSUFBWTtRQUNoQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQscUNBQU8sR0FBUDtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksWUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDOUIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMvQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztnQkFDakIsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7Z0JBQ25DLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUN0QixDQUFDLENBQUM7UUFDUCxDQUFDO1FBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELHlDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELHdDQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQTdETDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQzNDLENBQUM7OzJCQUFBO0lBeURGLDBCQUFDO0FBQUQsQ0F2REEsQUF1REMsSUFBQTtBQXZEWSwyQkFBbUIsc0JBdUQvQixDQUFBIiwiZmlsZSI6ImFwcC9zY3JpcHQtcGFnZS9zY3JpcHQtcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFNjcmlwdCwgU0NSSVBUUywgVEFCUywgU2NyaXB0U2VydmljZSwgSXRlbSB9IGZyb20gJy4uL3NoYXJlZC9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdzZC1zY3JpcHQtcGFnZScsXG4gICAgdGVtcGxhdGVVcmw6ICdzY3JpcHQtcGFnZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3NjcmlwdC1wYWdlLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBTY3JpcHRQYWdlQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIHN1YjogYW55O1xuICAgIHByaXZhdGUgc2NyaXB0OiBTY3JpcHQ7XG4gICAgcHJpdmF0ZSBpdGVtOiBhbnlbXSA9IFtdO1xuICAgIHByaXZhdGUgdmlldzogc3RyaW5nID0gJ3NldHRpbmdzJztcbiAgICBwcml2YXRlIHRhYnMgPSBUQUJTO1xuICAgIHByaXZhdGUgc2NyaXB0UnVubmluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgc2NyaXB0U2VydmljZTogU2NyaXB0U2VydmljZSkge1xuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgbGV0IGlkID0gcGFyc2VJbnQocGFyYW1zWydpZCddKTtcbiAgICAgICAgICAgIHRoaXMuc2NyaXB0ID0gdGhpcy5nZXRTY3JpcHRCeUlkKGlkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGdldFNjcmlwdEJ5SWQoaWQ6IG51bWJlcik6IFNjcmlwdCB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgU0NSSVBUUy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKFNDUklQVFNbaV0uaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFNDUklQVFNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgdmlld0lzKHZpZXc6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy52aWV3ID09PSB2aWV3O1xuICAgIH1cbiAgICBcbiAgICBzZXRWaWV3KHZpZXc6IHN0cmluZykge1xuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgIH1cbiAgICBcbiAgICBhZGRJdGVtKCkge1xuICAgICAgICBsZXQgaXRlbSA9IG5ldyBJdGVtKCk7XG4gICAgICAgIGl0ZW0uc2l0ZS5uYW1lID0gdGhpcy5zY3JpcHQubmFtZTtcbiAgICAgICAgaXRlbS5zaXRlLmlkID0gdGhpcy5zY3JpcHQuaWQ7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zY3JpcHQuaXRlbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaXRlbS5wcm9wZXJ0aWVzLnB1c2goe1xuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZTogdGhpcy5zY3JpcHQuaXRlbVtpXS5uYW1lLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLml0ZW1baV1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2NyaXB0U2VydmljZS5hZGRUb0NhcnQoaXRlbSk7XG4gICAgICAgIHRoaXMuaXRlbSA9IFtdO1xuICAgIH1cbiAgICBcbiAgICBzdGFydFNjcmlwdCgpIHtcbiAgICAgICAgdGhpcy5zY3JpcHRSdW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zY3JpcHRTZXJ2aWNlLnJ1blNjcmlwdCh0aGlzLnNjcmlwdCk7XG4gICAgfVxuICAgIFxuICAgIHN0b3BTY3JpcHQoKSB7XG4gICAgICAgIHRoaXMuc2NyaXB0UnVubmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNjcmlwdFNlcnZpY2Uuc3RvcFNjcmlwdCh0aGlzLnNjcmlwdCk7XG4gICAgfVxufVxuIl19
