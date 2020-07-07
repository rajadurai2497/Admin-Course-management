import { TestBed } from '@angular/core/testing';

import { UserMycourse.TsService } from './user-mycourse.ts.service';

describe('UserMycourse.TsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserMycourse.TsService = TestBed.get(UserMycourse.TsService);
    expect(service).toBeTruthy();
  });
});
