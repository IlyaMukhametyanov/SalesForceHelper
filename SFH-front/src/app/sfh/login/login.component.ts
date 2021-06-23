import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

//IntervalObservable.create(10000)
  form: FormGroup
  submited = false
  role = 0
  private router: Router
    private auth: AuthService
 
  constructor(
   
  ) { }

  ngOnInit(): void {
        

    this.form = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })
  }

  

  submit() {

    if (this.form.invalid) {
      return
    }

    this.submited = true

    const user = {
      username: this.form.value.username,
      password: this.form.value.password
    }

    let formData = new FormData();
    formData.append("username", this.form.value.email);
    formData.append("password", this.form.value.password);

//[disabled]="form.invalid||submited"


    this.auth.login(user)
    .subscribe(res => {
      console.log(res)
      this.form.reset    
    }, () => {
      this.submited = false
    })

   this.auth.GetTypeAccount()
    .subscribe(res => {
      console.log(res)  
      if (this.role == 0) {
        //отправить на страницу с нужным интерфейсом
      }
      if (localStorage.getItem('role') == '1') {
        //owner
        this.router.navigate(['owner'])
      }
      if (localStorage.getItem('role') ==  '2') {
        //director
        this.router.navigate(['director'])
      }
      if (localStorage.getItem('role') =='3') {
        //manager
        this.router.navigate(['manager'])
      }
    })


  
this.submited = false
  }
}




   /*
            let userdate = this.auth.GetTypeAccount()
      
            console.log(userdate)
            //тру кач блок, если произошла ошибка то в роль поместить -1, иначе то что пришло
      
            if (this.role == -1) {
              //вызвать метод выхода из аккаунта
              //перенаправит на страницу входа
            }
            if (this.role == 0) {
              //отправить на страницу с нужным интерфейсом
            }
            if (this.role == 1) {
              //отправить на страницу с нужным интерфейсом
            }
            if (this.role == 2) {
              //отправить на страницу с нужным интерфейсом
            }
            if (this.role == 3) {
              //отправить на страницу с нужным интерфейсом
            }
      
            //запомнить роль в локалльное хранилище
      
            this.submited = false*/