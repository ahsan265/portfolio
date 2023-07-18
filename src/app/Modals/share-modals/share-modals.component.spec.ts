import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareModalsComponent } from './share-modals.component';

describe('ShareModalsComponent', () => {
  let component: ShareModalsComponent;
  let fixture: ComponentFixture<ShareModalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShareModalsComponent]
    });
    fixture = TestBed.createComponent(ShareModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
