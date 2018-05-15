import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisTarefaComponent } from './vis-tarefa.component';

describe('VisTarefaComponent', () => {
  let component: VisTarefaComponent;
  let fixture: ComponentFixture<VisTarefaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisTarefaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
