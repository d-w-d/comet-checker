import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit, ViewChild, OnChanges } from '@angular/core';
import { ZtfDataService } from '@app/oort/ztf-data.service';
import { IMOSData } from '@app/oort/ztf-data.model';
import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'cccc-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit, AfterViewInit {
  //

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // data: IMOSData | null = null;
  // data: any = null;

  data: MatTableDataSource<IMOSData>;

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

  constructor(private ztfData: ZtfDataService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.ztfData.getOortData().subscribe(
      (data: IMOSData[]) => {
        this.data = new MatTableDataSource(data);

        // Be careful! paginator and sort elements will be undefined until data is not-null and the table is then rendered!
        this.data.paginator = this.paginator;
        this.data.sort = this.sort;
        console.log('paginator', this.paginator);
        console.log('sort', this.sort);
      },
      err => {
        console.log('Error:' + JSON.stringify(err));
        this.data = null;
      }
    );
  }

  /**
   * Click buttons to toggle columns included/excluded
   * @param col: column name to be added/removed
   */
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

  applyFilter(filterValue: string) {
    this.data.filter = filterValue.trim().toLowerCase();

    if (!!this.data.paginator) {
      this.data.paginator.firstPage();
    }
  }
}
