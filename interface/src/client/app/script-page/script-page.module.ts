import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ScriptPageComponent } from './script-page.component';
import { ScriptService } from '../shared/script/index';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [ScriptPageComponent],
  exports: [ScriptPageComponent],
  providers: [ScriptService]
})
export class ScriptPageModule { }
