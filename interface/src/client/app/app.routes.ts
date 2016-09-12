import { Routes } from '@angular/router';

import { HomeRoutes } from './home/index';
import { ScriptPageRoutes } from './script-page/index';

export const routes: Routes = [
    ...HomeRoutes,
    ...ScriptPageRoutes
];
