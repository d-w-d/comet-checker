import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IZTFData, IMOSData } from './ztf-data.model';

// const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const DATA_URL = 'https://oort.astro.umd.edu/catch/moving-object-search/?objid=909';

@Injectable({
  providedIn: 'root'
})
export class ZtfDataService {
  constructor(private httpClient: HttpClient) {}

  getOortData(): Observable<IMOSData[]> {
    return this.httpClient.get(DATA_URL).pipe(
      map((data: any) => {
        // console.log('---------------');
        // console.log(Object.keys(data.resource.data[0]));
        // console.log('---------------');
        return data.resource.data;
      })
    );
  }
}
