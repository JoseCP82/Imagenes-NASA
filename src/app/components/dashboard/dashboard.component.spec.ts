import { TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';

fdescribe('DashboardComponent', () => {
  let component: DashboardComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule
      ],
      
      
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    component = TestBed.inject(DashboardComponent);
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
