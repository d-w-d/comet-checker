import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'cccc-telescope-background',
  templateUrl: './telescope-background.component.html',
  styleUrls: ['./telescope-background.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TelescopeBackgroundComponent implements OnInit {
  //

  @Input()
  imageSource: string;

  constructor() {}

  ngOnInit() {}
}
