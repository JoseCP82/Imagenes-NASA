import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DetailGuard } from './detail.guard';
import { HttpClientModule } from '@angular/common/http';
import { ImageService } from '../services/image.service';

describe('DetailGuard', () => {
  let guard: DetailGuard;
  let service: ImageService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
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

  it('should enterTrue', () => {
    spyOn(service, 'getFlag').and.returnValue(true);
    expect(guard.canActivate).toBeTruthy();
  });

  it('should enterFalse', () => {
    spyOn(service, 'getFlag').and.returnValue(false);
    expect(guard.canActivate).toBeTruthy();
  });
});
