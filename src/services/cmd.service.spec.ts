import { TestBed } from '@angular/core/testing';

import { CmdService } from './cmd.service';

describe('CommandsService', () => {
  let service: CmdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CmdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
