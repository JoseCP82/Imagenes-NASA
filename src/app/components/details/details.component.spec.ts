import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  const fakeActivatedRoute = {
    snapshot: { data: {  } }
  } as ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        RouterTestingModule, 
        HttpClientModule
      ],
      declarations: [DetailsComponent],
      providers: [ 
        DetailsComponent,
        {provide: ActivatedRoute, useValue: fakeActivatedRoute} ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    component = TestBed.inject(DetailsComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
