import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomTargetComponent } from './zoom-target.component';

describe('ZoomTargetComponent', () => {
  let component: ZoomTargetComponent;
  let fixture: ComponentFixture<ZoomTargetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoomTargetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
