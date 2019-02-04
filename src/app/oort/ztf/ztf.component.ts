import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { ZtfDataService } from '../ztf-data.service';
import { IZTFData } from '../ztf-data.model';

@Component({
  selector: 'cccc-ztf',
  templateUrl: './ztf.component.html',
  styleUrls: ['./ztf.component.css']
  //   changeDetection: ChangeDetectionStrategy.OnPush
})
export class ZtfComponent implements OnInit, AfterViewInit {
  data: string;
  //   data2 = 'asdsadasdsdas';

  constructor(private ztfDataService: ZtfDataService) {}

  ngOnInit() {
    //   this.data =
  }

  ngAfterViewInit() {
    // this.ztfDataService.getOortData('xxx').subscribe((data: IZTFData) => {
    //   console.log('XXX >>>', data, JSON.stringify(data, null, 2));
    //   this.data = JSON.stringify(data, null, 2);
    // });
  }
}
