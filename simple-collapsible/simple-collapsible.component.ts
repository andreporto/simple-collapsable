import { Component, OnInit, trigger, transition, style, animate } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'simple-collapsible',
  styleUrls: ['simple-collapsible.component.scss'],
  animations: [
    trigger(
      'myAnimation',
      [
        transition(
          ':enter', [
            style({position: 'relative', opacity: 0}),
            animate('200ms', style({ opacity: 1}))
          ]
        ),
        transition(
          ':leave', [
            style({position: 'relative', opacity: 1}),
            animate('100ms', style({opacity: 0}))
          ]
        )
    ]
    )
  ],
  template: `
  <div class="clickableCursor" (click)="onClick($event)" [ngClass]="{'expanded':expand}">
    <ng-content select="[sc-header]"></ng-content>
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
