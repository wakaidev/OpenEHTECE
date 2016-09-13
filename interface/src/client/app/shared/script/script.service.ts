import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Item, Script } from '../classes/index';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ScriptService {
    private cart: Item[] = [];
    private activeScripts: any = {};

    constructor(private http: Http) {}
  
    executeScript(script: Script): Promise<any> {
        let items: any = [];
        for (let i = 0; i < this.cart.length; i++) {
            if (this.cart[i].site.id === script.id) {
                items.push(this.cart[i]);
            }
        }
        let toExecute = {
            id: script.id,
            items: items
        };
        let p = new Promise<any>((resolve, reject) => {
            this.http.post('http://127.0.0.1:5000/script/', toExecute)
                        .map((res: Response) => res.json())
                        .catch(this.handleError)
                        .subscribe((data) => {
                            resolve(data);
                        })
        });
        return p;
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
    
    inCart(id: number) {
        for (let i = 0; i < this.cart.length; i++) {
            if (this.cart[i].site.id === id) {
                return true;
            }
        }
        return false;
    }
    
    addToCart(item: Item) {
        this.cart.push(item);
    }
    
    getCart() {
        return this.cart;
    }
    
    runScript(script: Script) {
        this.activeScripts[script.name] = script;
        this.executeScript(script).then((result) => {
            console.log(result);
        });
    }
    
    stopScript(script: Script) {
        delete this.activeScripts[script.name];
    }
    
    get scriptsRunning() {
        return JSON.stringify(this.activeScripts) !== "{}";
    }
    
    get activeScriptsArray() {
        return Object.keys(this.activeScripts).map(key => this.activeScripts[key]);
    }
}

