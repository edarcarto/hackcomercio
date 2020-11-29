import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectoralOpinionComponent } from './electoral-opinion.component';

describe('ElectoralOpinionComponent', () => {
  let component: ElectoralOpinionComponent;
  let fixture: ComponentFixture<ElectoralOpinionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectoralOpinionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectoralOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
