import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

import { LoginComponent } from './login.component';



describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(()=>{
   // component = new LoginComponent()
  })

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create form with 2 controls', () => {
    expect(component.form.contains('username')).toBeTruthy();
    expect(component.form.contains('password')).toBeTruthy();
  });

  it('should mark username as invalid if empty value',()=>{
    const control1= component.form.get('username') 
   
    control1.setValue('')
   

    expect(control1.valid).toBeFalsy()
  })
  it('should mark password as invalid if empty value',()=>{
  const control2= component.form.get('password') 
  control2.setValue('')
    expect(control2.valid).toBeFalsy()
})
});
