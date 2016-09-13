import { Component } from '@angular/core';
import { ScriptService } from '../script/index';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'sd-sidebar',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['sidebar.component.css'],
})

export class SidebarComponent {
    constructor(private scriptService: ScriptService,
                private router: Router) {}
                
    gotoScript(id: number) {
        this.router.navigate(['/script/' + id]);
    }
}