import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInformationConsoleComponent } from './user-information-console.component';

describe('UserInformationConsoleComponent', () => {
  let component: UserInformationConsoleComponent;
  let fixture: ComponentFixture<UserInformationConsoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserInformationConsoleComponent]
    });
    fixture = TestBed.createComponent(UserInformationConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
