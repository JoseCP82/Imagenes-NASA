import { TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [NavbarComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    component = TestBed.inject(NavbarComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
