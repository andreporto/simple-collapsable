import { Component, OnInit, trigger, transition, style, animate } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'simple-collapsible',
  animations: [
    trigger(
      'myAnimation',
      [
        transition(
          ':enter', [
            style({opacity: 0}),
            animate('500ms', style({ 'opacity': 1}))
          ]
        ),
        transition(
          ':leave', [
            style({ 'opacity': 1}),
            animate('300ms', style({'opacity': 0}))
          ]
        )
    ]
    )
  ],
  template: `
  <div (click)="onClick($event)" [ngClass]="{'expanded':expand}">
    <ng-content select="[sc-header]" ></ng-content>
  </div>
  <div *ngIf="expand" [@myAnimation]>
    <ng-content select="[sc-content]"  ></ng-content>
  </div>
  `,
})
export class SimpleCollapsibleComponent implements OnInit {

  expand = false;

  constructor() { }

  ngOnInit() {
  }

  onClick(ev) {
    if (JSON.stringify(ev.target.classList).indexOf('sc-clickable') >= 0) {
      this.expand = !this.expand;
    }

  }

}
