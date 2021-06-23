import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public http: HttpClient
  ) { }

  login(user) {
    return this.http.post(" http://127.0.0.1:8000/api-token-auth/", user)
      .pipe(
        tap(this.setToken)
      )
  }

  private setToken(response) {
    if (response) {
      localStorage.setItem('token', response.token)
    } else {
      localStorage.clear()
    }
  }

  private setRole(response) {
    if (response) {
      localStorage.setItem('role', response[0].role)

    } else {
      localStorage.clear()
    }
  }

  GetTypeAccount() {
    let token = "token " + localStorage.getItem('token')
    const httpHeaders: HttpHeaders = new HttpHeaders({
      Authorization: token
    })
    let options = {
      headers: httpHeaders
    };
    return this.http.get("http://127.0.0.1:8000/account/", { headers: httpHeaders })
      .pipe(
        tap(this.setRole)
      )

  }

  logout(){
    this.setToken(null)
  }
}
