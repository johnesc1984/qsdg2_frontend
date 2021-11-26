import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginregistroComponent } from './loginregistro.component';

describe('LoginregistroComponent', () => {
  let component: LoginregistroComponent;
  let fixture: ComponentFixture<LoginregistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginregistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginregistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
