import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalEndPageComponent } from './final-end-page.component';

describe('FinalEndPageComponent', () => {
  let component: FinalEndPageComponent;
  let fixture: ComponentFixture<FinalEndPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalEndPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalEndPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
