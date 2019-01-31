import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';

@Component({
  selector: 'cccc-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home2Component implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  constructor() {}

  ngOnInit() {}
}
