import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorTableComponent } from './visitor-table.component';

describe('VisitorTableComponent', () => {
  let component: VisitorTableComponent;
  let fixture: ComponentFixture<VisitorTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisitorTableComponent]
    });
    fixture = TestBed.createComponent(VisitorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
