import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { ZtfDataService } from '@app/oort/ztf-data.service';
import { IMOSData } from '@app/oort/ztf-data.model';

@Component({
  selector: 'cccc-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataComponent implements OnInit, AfterViewInit {
  constructor(private ztfData: ZtfDataService) {}

  data: IMOSData | null = null;

  displayedColumnsOrder: string[] = [
    //
    'obsjd',
    'ra',
    'dec',
    'dra',
    'ddec',
    'ra3sig',
    'dec3sig',
    'vmag',
    'rh',
    'rdot',
    'delta',
    'phase',
    'selong',
    'sangle',
    'vangle',
    'trueanomaly'
  ];

  ngOnInit() {}

  ngAfterViewInit() {
    this.ztfData.getOortData().subscribe(
      (data: any) => {
        this.data = data;
      },
      err => {
        console.log('Error:' + JSON.stringify(err));
        this.data = null;
      }
    );
  }
}
