import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisHojeComponent } from './vis-hoje.component';

describe('VisHojeComponent', () => {
  let component: VisHojeComponent;
  let fixture: ComponentFixture<VisHojeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisHojeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisHojeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
