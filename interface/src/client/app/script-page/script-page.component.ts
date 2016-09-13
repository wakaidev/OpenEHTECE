import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Script, SCRIPTS, TABS, ScriptService, Item } from '../shared/index';

@Component({
    moduleId: module.id,
    selector: 'sd-script-page',
    templateUrl: 'script-page.component.html',
    styleUrls: ['script-page.component.css'],
})

export class ScriptPageComponent {
    private sub: any;
    private script: Script;
    private item: any[] = [];
    private view: string = 'settings';
    private tabs = TABS;
    private scriptRunning: boolean = false;
    
    constructor(private route: ActivatedRoute,
                private scriptService: ScriptService) {
        this.sub = this.route.params.subscribe(params => {
            let id = parseInt(params['id']);
            this.script = this.getScriptById(id);
        });
    }
    
    getScriptById(id: number): Script {
        for (let i = 0; i < SCRIPTS.length; i++) {
            if (SCRIPTS[i].id === id) {
                return SCRIPTS[i];
            }
        }
    }
    
    viewIs(view: string) {
        return this.view === view;
    }
    
    setView(view: string) {
        this.view = view;
    }
    
    addItem() {
        let item = new Item();
        item.site.name = this.script.name;
        item.site.id = this.script.id;
        for (let i = 0; i < this.script.item.length; i++) {
            item.properties.push({
                attribute: this.script.item[i].name,
                value: this.item[i]
            });
        }
        this.scriptService.addToCart(item);
        this.item = [];
    }
    
    startScript() {
        this.scriptRunning = true;
        this.scriptService.runScript(this.script);
    }
    
    stopScript() {
        this.scriptRunning = false;
        this.scriptService.stopScript(this.script);
    }
}
