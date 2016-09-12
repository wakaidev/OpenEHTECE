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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var ScriptService = (function () {
    function ScriptService(http) {
        this.http = http;
        this.cart = [];
        this.activeScripts = [];
    }
    ScriptService.prototype.get = function () {
        return this.http.get('/assets/data.json')
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ScriptService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    ScriptService.prototype.inCart = function (id) {
        for (var i = 0; i < this.cart.length; i++) {
            if (this.cart[i].site.id === id) {
                return true;
            }
        }
    };
    ScriptService.prototype.addToCart = function (item) {
        this.cart.push(item);
    };
    ScriptService.prototype.getCart = function () {
        return this.cart;
    };
    ScriptService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ScriptService);
    return ScriptService;
}());
exports.ScriptService = ScriptService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2NyaXB0L3NjcmlwdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MscUJBQStCLGVBQWUsQ0FBQyxDQUFBO0FBQy9DLDJCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBRTdDLFFBQU8sdUJBQXVCLENBQUMsQ0FBQTtBQUMvQixRQUFPLHlCQUF5QixDQUFDLENBQUE7QUFHakM7SUFJSSx1QkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFIdEIsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUNsQixrQkFBYSxHQUFVLEVBQUUsQ0FBQztJQUVELENBQUM7SUFFbEMsMkJBQUcsR0FBSDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQzthQUN4QixHQUFHLENBQUMsVUFBQyxHQUFhLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ2xDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVPLG1DQUFXLEdBQW5CLFVBQW9CLEtBQVU7UUFDMUIsSUFBSSxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU87WUFDeEMsS0FBSyxDQUFDLE1BQU0sR0FBTSxLQUFLLENBQUMsTUFBTSxXQUFNLEtBQUssQ0FBQyxVQUFZLEdBQUcsY0FBYyxDQUFDO1FBQzVFLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEIsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCw4QkFBTSxHQUFOLFVBQU8sRUFBVTtRQUNiLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN4QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNoQixDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFFRCxpQ0FBUyxHQUFULFVBQVUsSUFBVTtRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsK0JBQU8sR0FBUDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFsQ0w7UUFBQyxpQkFBVSxFQUFFOztxQkFBQTtJQW1DYixvQkFBQztBQUFELENBbENBLEFBa0NDLElBQUE7QUFsQ1kscUJBQWEsZ0JBa0N6QixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvc2NyaXB0L3NjcmlwdC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgSXRlbSB9IGZyb20gJy4uL2NsYXNzZXMvaW5kZXgnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTY3JpcHRTZXJ2aWNlIHtcbiAgICBwcml2YXRlIGNhcnQ6IEl0ZW1bXSA9IFtdO1xuICAgIHByaXZhdGUgYWN0aXZlU2NyaXB0czogYW55W10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge31cbiAgXG4gICAgZ2V0KCk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJy9hc3NldHMvZGF0YS5qc29uJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogYW55KSB7XG4gICAgICAgIGxldCBlcnJNc2cgPSAoZXJyb3IubWVzc2FnZSkgPyBlcnJvci5tZXNzYWdlIDpcbiAgICAgICAgICAgIGVycm9yLnN0YXR1cyA/IGAke2Vycm9yLnN0YXR1c30gLSAke2Vycm9yLnN0YXR1c1RleHR9YCA6ICdTZXJ2ZXIgZXJyb3InO1xuICAgICAgICBjb25zb2xlLmVycm9yKGVyck1zZyk7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVyck1zZyk7XG4gICAgfVxuICAgIFxuICAgIGluQ2FydChpZDogbnVtYmVyKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jYXJ0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jYXJ0W2ldLnNpdGUuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgYWRkVG9DYXJ0KGl0ZW06IEl0ZW0pIHtcbiAgICAgICAgdGhpcy5jYXJ0LnB1c2goaXRlbSk7XG4gICAgfVxuICAgIFxuICAgIGdldENhcnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhcnQ7XG4gICAgfVxufVxuXG4iXX0=
