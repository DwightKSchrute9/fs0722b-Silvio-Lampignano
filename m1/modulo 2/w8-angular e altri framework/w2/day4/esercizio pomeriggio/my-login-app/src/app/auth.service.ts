import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




export interface LoginData {
  email: string,
  password: string
}



@Injectable({
  providedIn: 'root'
})
export class AuthService {



//creare chiamata http

  constructor(private http: HttpClient) { }
  login(credentials: string) {
    return this.http.post('/api/login', credentials);

}
  }


