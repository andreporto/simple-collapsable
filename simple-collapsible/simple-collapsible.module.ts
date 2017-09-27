import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SimpleCollapsibleComponent } from './simple-collapsible.component';

@NgModule({
  declarations: [
    SimpleCollapsibleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [SimpleCollapsibleComponent]
})
export class SimpleCollapsibleModule { }
