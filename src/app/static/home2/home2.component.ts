import { Component, OnInit, ChangeDetectionStrategy, ViewChild, AfterViewInit } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';

@Component({
  selector: 'cccc-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home2Component implements OnInit, AfterViewInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  @ViewChild('video')
  video: any;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    //
  }
}
