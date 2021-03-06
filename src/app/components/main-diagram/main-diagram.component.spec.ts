import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDiagramComponent } from './main-diagram.component';

describe('MainDiagramComponent', () => {
  let component: MainDiagramComponent;
  let fixture: ComponentFixture<MainDiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDiagramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
