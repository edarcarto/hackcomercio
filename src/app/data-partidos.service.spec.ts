import { TestBed } from '@angular/core/testing';

import { DataPartidosService } from './data-partidos.service';

describe('DataPartidosService', () => {
  let service: DataPartidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataPartidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
