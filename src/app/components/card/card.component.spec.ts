import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ CardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    component = TestBed.inject(CardComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
