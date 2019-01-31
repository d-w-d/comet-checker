import { TestBed, inject, async } from '@angular/core/testing';

import { ZtfDataService } from './ztf-data.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '@app/shared';
import { CoreModule } from '@app/core';
import { HttpClient } from 'selenium-webdriver/http';

describe('ZtfDataService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  beforeEach(() => {
    // TestBed.configureTestingModule({});

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule, CoreModule, SharedModule],
      providers: [
        //
        ZtfDataService,
        { provide: HttpClient, useValue: httpClientSpy }
      ]
    });
  });

  it('should be created', inject([ZtfDataService], (service: ZtfDataService) => {
    expect(service).toBeTruthy();
  }));

  // it('should be created', () => {
  //   const service: ZtfDataService = TestBed.get(ZtfDataService);
  //   expect(service).toBeTruthy();
  // });

  // it(`should create`, async(
  //   inject([HttpTestingController, ZtfDataService], (httpClient: HttpTestingController, apiService: ZtfDataService) => {
  //     expect(apiService).toBeTruthy();
  //   })
  // ));
});
