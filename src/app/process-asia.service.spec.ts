import { TestBed, inject } from '@angular/core/testing';

import { ProcessAsiaService } from './process-asia.service';

describe('ProcessAsiaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProcessAsiaService]
    });
  });

  it('should be created', inject([ProcessAsiaService], (service: ProcessAsiaService) => {
    expect(service).toBeTruthy();
  }));
});
