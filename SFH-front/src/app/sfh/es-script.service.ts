import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EsScriptService {

  constructor(public http: HttpClient) {

  }
//CORS_ALLOW_ALL_ORIGINS = True
//'corsheaders.middleware.CorsMiddleware',
//'corsheaders',
  ScriptPost(body) {
    let token = "token " + localStorage.getItem('token')
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Authorization': token,
      'Content-type': 'application/json'
    })
    return this.http.post(" http://127.0.0.1:8000/salesscripts/", body,{ headers: httpHeaders })
  }

  ScriptGet(){
    let token = "token " + localStorage.getItem('token')
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Authorization': token,
      'Content-type': 'application/json'
    })
    return this.http.get(" http://127.0.0.1:8000/salesscripts/",{ headers: httpHeaders })
    .pipe(map(res=>{
      return Object.keys(res)
      .map(key => ({
        ...res[key],
        
      }))
    }))
  }
}
