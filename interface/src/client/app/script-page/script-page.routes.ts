import { Route } from '@angular/router';
import { ScriptPageComponent } from './index';

export const ScriptPageRoutes: Route[] = [
    {
        path: 'script/:id',
        component: ScriptPageComponent
    }
];
