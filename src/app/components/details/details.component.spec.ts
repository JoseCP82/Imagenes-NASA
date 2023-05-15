import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        RouterTestingModule, 
        HttpClientModule,
        TranslateModule.forRoot()
      ],
      declarations: [DetailsComponent],
      providers: [ 
        DetailsComponent
      ]
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

  it('should toNavigate', () => {
    expect(component.goToDashboard).toHaveBeenCalled;
  })
});
