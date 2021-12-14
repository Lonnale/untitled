import {TestBed} from '@angular/core/testing';
import {TenttikysymysService} from './tenttikysymys.service';

describe('TenttikysymysService', () => {
  let service: TenttikysymysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TenttikysymysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

