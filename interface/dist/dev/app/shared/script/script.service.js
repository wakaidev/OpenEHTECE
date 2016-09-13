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
        this.activeScripts = {};
    }
    ScriptService.prototype.executeScript = function (script) {
        var _this = this;
        var items = [];
        for (var i = 0; i < this.cart.length; i++) {
            if (this.cart[i].site.id === script.id) {
                items.push(this.cart[i]);
            }
        }
        var toExecute = {
            id: script.id,
            items: items
        };
        var p = new Promise(function (resolve, reject) {
            _this.http.post('http://127.0.0.1:5000/script/', toExecute)
                .map(function (res) { return res.json(); })
                .catch(_this.handleError)
                .subscribe(function (data) {
                resolve(data);
            });
        });
        return p;
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
        return false;
    };
    ScriptService.prototype.addToCart = function (item) {
        this.cart.push(item);
    };
    ScriptService.prototype.getCart = function () {
        return this.cart;
    };
    ScriptService.prototype.runScript = function (script) {
        this.activeScripts[script.name] = script;
        this.executeScript(script).then(function (result) {
            console.log(result);
        });
    };
    ScriptService.prototype.stopScript = function (script) {
        delete this.activeScripts[script.name];
    };
    Object.defineProperty(ScriptService.prototype, "scriptsRunning", {
        get: function () {
            return JSON.stringify(this.activeScripts) !== "{}";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScriptService.prototype, "activeScriptsArray", {
        get: function () {
            var _this = this;
            return Object.keys(this.activeScripts).map(function (key) { return _this.activeScripts[key]; });
        },
        enumerable: true,
        configurable: true
    });
    ScriptService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ScriptService);
    return ScriptService;
}());
exports.ScriptService = ScriptService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2NyaXB0L3NjcmlwdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MscUJBQStCLGVBQWUsQ0FBQyxDQUFBO0FBQy9DLDJCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBRTdDLFFBQU8sdUJBQXVCLENBQUMsQ0FBQTtBQUMvQixRQUFPLHlCQUF5QixDQUFDLENBQUE7QUFHakM7SUFJSSx1QkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFIdEIsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUNsQixrQkFBYSxHQUFRLEVBQUUsQ0FBQztJQUVDLENBQUM7SUFFbEMscUNBQWEsR0FBYixVQUFjLE1BQWM7UUFBNUIsaUJBb0JDO1FBbkJHLElBQUksS0FBSyxHQUFRLEVBQUUsQ0FBQztRQUNwQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDeEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QixDQUFDO1FBQ0wsQ0FBQztRQUNELElBQUksU0FBUyxHQUFHO1lBQ1osRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDZixDQUFDO1FBQ0YsSUFBSSxDQUFDLEdBQUcsSUFBSSxPQUFPLENBQU0sVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNyQyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQywrQkFBK0IsRUFBRSxTQUFTLENBQUM7aUJBQzdDLEdBQUcsQ0FBQyxVQUFDLEdBQWEsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7aUJBQ2xDLEtBQUssQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDO2lCQUN2QixTQUFTLENBQUMsVUFBQyxJQUFJO2dCQUNaLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixDQUFDLENBQUMsQ0FBQTtRQUNsQixDQUFDLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDYixDQUFDO0lBRU8sbUNBQVcsR0FBbkIsVUFBb0IsS0FBVTtRQUMxQixJQUFJLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTztZQUN4QyxLQUFLLENBQUMsTUFBTSxHQUFNLEtBQUssQ0FBQyxNQUFNLFdBQU0sS0FBSyxDQUFDLFVBQVksR0FBRyxjQUFjLENBQUM7UUFDNUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QixNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELDhCQUFNLEdBQU4sVUFBTyxFQUFVO1FBQ2IsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3hDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLENBQUM7UUFDTCxDQUFDO1FBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsaUNBQVMsR0FBVCxVQUFVLElBQVU7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELCtCQUFPLEdBQVA7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQsaUNBQVMsR0FBVCxVQUFVLE1BQWM7UUFDcEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTTtZQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGtDQUFVLEdBQVYsVUFBVyxNQUFjO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELHNCQUFJLHlDQUFjO2FBQWxCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLElBQUksQ0FBQztRQUN2RCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDZDQUFrQjthQUF0QjtZQUFBLGlCQUVDO1lBREcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEVBQXZCLENBQXVCLENBQUMsQ0FBQztRQUMvRSxDQUFDOzs7T0FBQTtJQXRFTDtRQUFDLGlCQUFVLEVBQUU7O3FCQUFBO0lBdUViLG9CQUFDO0FBQUQsQ0F0RUEsQUFzRUMsSUFBQTtBQXRFWSxxQkFBYSxnQkFzRXpCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9zY3JpcHQvc2NyaXB0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBJdGVtLCBTY3JpcHQgfSBmcm9tICcuLi9jbGFzc2VzL2luZGV4JztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2NyaXB0U2VydmljZSB7XG4gICAgcHJpdmF0ZSBjYXJ0OiBJdGVtW10gPSBbXTtcbiAgICBwcml2YXRlIGFjdGl2ZVNjcmlwdHM6IGFueSA9IHt9O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxuICBcbiAgICBleGVjdXRlU2NyaXB0KHNjcmlwdDogU2NyaXB0KTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgbGV0IGl0ZW1zOiBhbnkgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNhcnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNhcnRbaV0uc2l0ZS5pZCA9PT0gc2NyaXB0LmlkKSB7XG4gICAgICAgICAgICAgICAgaXRlbXMucHVzaCh0aGlzLmNhcnRbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCB0b0V4ZWN1dGUgPSB7XG4gICAgICAgICAgICBpZDogc2NyaXB0LmlkLFxuICAgICAgICAgICAgaXRlbXM6IGl0ZW1zXG4gICAgICAgIH07XG4gICAgICAgIGxldCBwID0gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmh0dHAucG9zdCgnaHR0cDovLzEyNy4wLjAuMTo1MDAwL3NjcmlwdC8nLCB0b0V4ZWN1dGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpIHtcbiAgICAgICAgbGV0IGVyck1zZyA9IChlcnJvci5tZXNzYWdlKSA/IGVycm9yLm1lc3NhZ2UgOlxuICAgICAgICAgICAgZXJyb3Iuc3RhdHVzID8gYCR7ZXJyb3Iuc3RhdHVzfSAtICR7ZXJyb3Iuc3RhdHVzVGV4dH1gIDogJ1NlcnZlciBlcnJvcic7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyTXNnKTtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyTXNnKTtcbiAgICB9XG4gICAgXG4gICAgaW5DYXJ0KGlkOiBudW1iZXIpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNhcnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNhcnRbaV0uc2l0ZS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIGFkZFRvQ2FydChpdGVtOiBJdGVtKSB7XG4gICAgICAgIHRoaXMuY2FydC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICBcbiAgICBnZXRDYXJ0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYXJ0O1xuICAgIH1cbiAgICBcbiAgICBydW5TY3JpcHQoc2NyaXB0OiBTY3JpcHQpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVTY3JpcHRzW3NjcmlwdC5uYW1lXSA9IHNjcmlwdDtcbiAgICAgICAgdGhpcy5leGVjdXRlU2NyaXB0KHNjcmlwdCkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgc3RvcFNjcmlwdChzY3JpcHQ6IFNjcmlwdCkge1xuICAgICAgICBkZWxldGUgdGhpcy5hY3RpdmVTY3JpcHRzW3NjcmlwdC5uYW1lXTtcbiAgICB9XG4gICAgXG4gICAgZ2V0IHNjcmlwdHNSdW5uaW5nKCkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5hY3RpdmVTY3JpcHRzKSAhPT0gXCJ7fVwiO1xuICAgIH1cbiAgICBcbiAgICBnZXQgYWN0aXZlU2NyaXB0c0FycmF5KCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5hY3RpdmVTY3JpcHRzKS5tYXAoa2V5ID0+IHRoaXMuYWN0aXZlU2NyaXB0c1trZXldKTtcbiAgICB9XG59XG5cbiJdfQ==
