import { TestBed } from '@angular/core/testing';

import { FormBuscaService } from './form-busca.service';

describe('FormBuscaServiceService', () => {
  let service: FormBuscaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormBuscaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
