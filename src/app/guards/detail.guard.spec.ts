import { TestBed } from '@angular/core/testing';
import { DetailGuard } from './detail.guard';
import { HttpClientModule } from '@angular/common/http';
import { ImageService } from '../services/image.service';

fdescribe('DetailGuard', () => {
  let guard: DetailGuard;
  let service: ImageService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DetailGuard);
    service = TestBed.inject(ImageService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  fit('should enterTrue', () => {
    spyOn(service, 'getFlag').and.returnValue(true);
    expect(guard.canActivate).toBeTruthy();
  })
});
