import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Item } from '../classes/index';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ScriptService {
    private cart: Item[] = [];
    private activeScripts: any[] = [];

    constructor(private http: Http) {}
  
    get(): Observable<string[]> {
        return this.http.get('/assets/data.json')
                        .map((res: Response) => res.json())
                        .catch(this.handleError);
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
    }
    
    addToCart(item: Item) {
        this.cart.push(item);
    }
    
    getCart() {
        return this.cart;
    }
}

