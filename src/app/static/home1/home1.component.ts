import { Component, OnInit, ChangeDetectionStrategy, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';

@Component({
  selector: 'cccc-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.scss']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home1Component implements OnInit, AfterViewInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  palomarImage: HTMLImageElement;
  palomarImageSource = 'https://s3.amazonaws.com/dwds-misc/palomar.jpg';
  isPalomarImageLoaded = false;

  constructor() {}

  ngOnInit() {
    //Lazy Load Unblurred Image:
    this.palomarImage = new Image();
    this.palomarImage.src = this.palomarImageSource;
    this.palomarImage.onload = () => {
      this.isPalomarImageLoaded = true;
    };
  }

  ngAfterViewInit() {
    //
  }
}
