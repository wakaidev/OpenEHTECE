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
    };
    ScriptPageComponent.prototype.stopScript = function () {
        this.scriptRunning = false;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zY3JpcHQtcGFnZS9zY3JpcHQtcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBK0IsaUJBQWlCLENBQUMsQ0FBQTtBQUNqRCxzQkFBMkQsaUJBQWlCLENBQUMsQ0FBQTtBQVM3RTtJQVFJLDZCQUFvQixLQUFxQixFQUNyQixhQUE0QjtRQVRwRCxpQkFxREM7UUE3Q3VCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBTnhDLFNBQUksR0FBVSxFQUFFLENBQUM7UUFDakIsU0FBSSxHQUFXLFVBQVUsQ0FBQztRQUMxQixTQUFJLEdBQUcsWUFBSSxDQUFDO1FBQ1osa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFJbkMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ3pDLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNoQyxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsMkNBQWEsR0FBYixVQUFjLEVBQVU7UUFDcEIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxlQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDdEMsRUFBRSxDQUFDLENBQUMsZUFBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixNQUFNLENBQUMsZUFBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQztJQUVELG9DQUFNLEdBQU4sVUFBTyxJQUFZO1FBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDO0lBQzlCLENBQUM7SUFFRCxxQ0FBTyxHQUFQLFVBQVEsSUFBWTtRQUNoQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQscUNBQU8sR0FBUDtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksWUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDOUIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMvQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztnQkFDakIsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7Z0JBQ25DLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUN0QixDQUFDLENBQUM7UUFDUCxDQUFDO1FBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELHlDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztJQUM5QixDQUFDO0lBRUQsd0NBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7SUEzREw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztTQUMzQyxDQUFDOzsyQkFBQTtJQXVERiwwQkFBQztBQUFELENBckRBLEFBcURDLElBQUE7QUFyRFksMkJBQW1CLHNCQXFEL0IsQ0FBQSIsImZpbGUiOiJhcHAvc2NyaXB0LXBhZ2Uvc2NyaXB0LXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTY3JpcHQsIFNDUklQVFMsIFRBQlMsIFNjcmlwdFNlcnZpY2UsIEl0ZW0gfSBmcm9tICcuLi9zaGFyZWQvaW5kZXgnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnc2Qtc2NyaXB0LXBhZ2UnLFxuICAgIHRlbXBsYXRlVXJsOiAnc2NyaXB0LXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydzY3JpcHQtcGFnZS5jb21wb25lbnQuY3NzJ10sXG59KVxuXG5leHBvcnQgY2xhc3MgU2NyaXB0UGFnZUNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBzdWI6IGFueTtcbiAgICBwcml2YXRlIHNjcmlwdDogU2NyaXB0O1xuICAgIHByaXZhdGUgaXRlbTogYW55W10gPSBbXTtcbiAgICBwcml2YXRlIHZpZXc6IHN0cmluZyA9ICdzZXR0aW5ncyc7XG4gICAgcHJpdmF0ZSB0YWJzID0gVEFCUztcbiAgICBwcml2YXRlIHNjcmlwdFJ1bm5pbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHNjcmlwdFNlcnZpY2U6IFNjcmlwdFNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICAgIGxldCBpZCA9IHBhcnNlSW50KHBhcmFtc1snaWQnXSk7XG4gICAgICAgICAgICB0aGlzLnNjcmlwdCA9IHRoaXMuZ2V0U2NyaXB0QnlJZChpZCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBnZXRTY3JpcHRCeUlkKGlkOiBudW1iZXIpOiBTY3JpcHQge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IFNDUklQVFMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChTQ1JJUFRTW2ldLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBTQ1JJUFRTW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHZpZXdJcyh2aWV3OiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlldyA9PT0gdmlldztcbiAgICB9XG4gICAgXG4gICAgc2V0Vmlldyh2aWV3OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy52aWV3ID0gdmlldztcbiAgICB9XG4gICAgXG4gICAgYWRkSXRlbSgpIHtcbiAgICAgICAgbGV0IGl0ZW0gPSBuZXcgSXRlbSgpO1xuICAgICAgICBpdGVtLnNpdGUubmFtZSA9IHRoaXMuc2NyaXB0Lm5hbWU7XG4gICAgICAgIGl0ZW0uc2l0ZS5pZCA9IHRoaXMuc2NyaXB0LmlkO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2NyaXB0Lml0ZW0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGl0ZW0ucHJvcGVydGllcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGU6IHRoaXMuc2NyaXB0Lml0ZW1baV0ubmFtZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5pdGVtW2ldXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjcmlwdFNlcnZpY2UuYWRkVG9DYXJ0KGl0ZW0pO1xuICAgICAgICB0aGlzLml0ZW0gPSBbXTtcbiAgICB9XG4gICAgXG4gICAgc3RhcnRTY3JpcHQoKSB7XG4gICAgICAgIHRoaXMuc2NyaXB0UnVubmluZyA9IHRydWU7XG4gICAgfVxuICAgIFxuICAgIHN0b3BTY3JpcHQoKSB7XG4gICAgICAgIHRoaXMuc2NyaXB0UnVubmluZyA9IGZhbHNlO1xuICAgIH1cbn1cbiJdfQ==
