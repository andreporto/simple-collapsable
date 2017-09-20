import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SimpleCollapsableComponent } from './simple-collapsable.component';

@NgModule({
  declarations: [
    SimpleCollapsableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [SimpleCollapsableComponent]
})
export class SimpleCollapsableModule { }
