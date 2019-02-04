import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { ZtfDataService } from '@app/oort/ztf-data.service';

@Component({
  selector: 'cccc-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataComponent implements OnInit, AfterViewInit {
  constructor(private ztfData: ZtfDataService) {}

  data: any = '???';

  ngOnInit() {}

  ngAfterViewInit() {
    this.ztfData.getOortData().subscribe((data: any) => {
      this.data = JSON.stringify(data);
      console.log('DATA!!!', this.data);
    });
  }
}
