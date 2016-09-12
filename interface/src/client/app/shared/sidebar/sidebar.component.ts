import { Component } from '@angular/core';
import { ScriptService } from '../script/index';

@Component({
    moduleId: module.id,
    selector: 'sd-sidebar',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['sidebar.component.css'],
})

export class SidebarComponent {
    constructor(private scriptService: ScriptService) {}
}