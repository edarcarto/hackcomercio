import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepresentanteDetailComponent } from './representante-detail.component';

describe('RepresentanteDetailComponent', () => {
  let component: RepresentanteDetailComponent;
  let fixture: ComponentFixture<RepresentanteDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepresentanteDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepresentanteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
