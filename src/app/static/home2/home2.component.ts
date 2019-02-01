import { Component, OnInit, ChangeDetectionStrategy, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';

@Component({
  selector: 'cccc-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home2Component implements OnInit, AfterViewInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  isVideoLoaded = false;
  videoURL = 'https://s3.amazonaws.com/dwds-misc/space-telescopes.mp4';
  videoHandle: HTMLVideoElement;
  // @ViewChild('video')
  // video: ElementRef;

  constructor() {}

  ngOnInit() {
    //
    // const video = this.video.nativeElement;

    this.videoHandle = document.createElement('video');
    this.videoHandle.src = this.videoURL;

    // const video = document.getElementById('my-video') as HTMLVideoElement;
    // const source = document.getElementById('my-video-source') as HTMLSourceElement;
    // source.type = '';
    // source.src = ;
    this.videoHandle.load();

    this.videoHandle.addEventListener(
      'loadeddata',
      () => {
        // Video is loaded and can be played
        this.isVideoLoaded = true;

        console.log('Video Loaded!!!', this.isVideoLoaded);
      },
      false
    );
  }

  ngAfterViewInit() {
    //
    // const video = this.video.nativeElement;
    // console.log('video: ', video);
  }
}
