import { TestBed } from '@angular/core/testing';

import { ErrorComponent } from './error.component';
import { HttpClientModule } from '@angular/common/http';

describe('ErrorComponent', () => {
  let component: ErrorComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ ErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    component = TestBed.inject(ErrorComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
