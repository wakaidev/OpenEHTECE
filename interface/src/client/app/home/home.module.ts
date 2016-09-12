import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { ScriptService } from '../shared/script/index';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  providers: [ScriptService]
})
export class HomeModule { }
