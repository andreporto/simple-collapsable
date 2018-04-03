import { Component, OnInit, trigger, transition, style, animate, Input } from '@angular/core';
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
  <div class="clickableCursor relative" (click)="onClick($event)" [ngClass]="{'expanded':expand}">
    <div *ngIf="expand && iconLocation != 'none'" class="expandIcon  sc-clickable" [ngClass]="{'in':iconLocation=='in','out':iconLocation=='out','top':iconAlign=='top','middle':iconAlign=='middle','bottom':iconAlign=='bottom'}"><i class="icon-check_minus sc-clickable"></i></div>
    <div *ngIf="!expand && iconLocation != 'none'" class="expandIcon sc-clickable" [ngClass]="{'in':iconLocation=='in','out':iconLocation=='out','top':iconAlign=='top','middle':iconAlign=='middle','bottom':iconAlign=='bottom'}"><i class="icon-plus-square-o sc-clickable"></i></div>
    <ng-content select="[sc-header]"></ng-content>
  </div>
  <div *ngIf="expand" [@myAnimation] class="relative">
    <ng-content select="[sc-content]"  ></ng-content>
  </div>
  `,
})
export class SimpleCollapsibleComponent implements OnInit {

  @Input()iconAlign:string = 'middle'; // left;right;top;middle;bottom
  @Input()iconLocation:string = 'in'; // in;out;none
  @Input()expand:boolean = false;

  constructor() { }

  ngOnInit() {

  }

  onClick(ev) {
    if (JSON.stringify(ev.target.classList).indexOf('sc-clickable') >= 0) {
      this.expand = !this.expand;
    }

  }

}
