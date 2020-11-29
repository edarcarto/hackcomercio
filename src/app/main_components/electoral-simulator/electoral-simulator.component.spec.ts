import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectoralSimulatorComponent } from './electoral-simulator.component';

describe('ElectoralSimulatorComponent', () => {
  let component: ElectoralSimulatorComponent;
  let fixture: ComponentFixture<ElectoralSimulatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectoralSimulatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectoralSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
