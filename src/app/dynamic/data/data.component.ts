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

  shownCols: string[] = [
    //
    'obsjd',
    'ra',
    'dec'
  ];
  hiddenCols: string[] = [
    //
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

  allColumns: string[] = this.shownCols.concat(this.hiddenCols);

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

  addRemoveCols(col: string) {
    if (this.shownCols.includes(col) && this.shownCols.length > 1) {
      // Remove column
      const index = this.shownCols.indexOf(col);
      if (index !== -1) this.shownCols.splice(index, 1);
    } else if (this.shownCols.length <= 1) {
      return;
    } else {
      // Add column and order shown cols by button order
      this.shownCols.push(col);
      this.shownCols = this.shownCols.sort((a, b) => this.allColumns.indexOf(a) - this.allColumns.indexOf(b));
    }
  }
}
