import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _loginUrl = 'https://olpejeta-apis.000webhostapp.com/api/admin'
  constructor(private http: HttpClient) { }
  loginUser(user){
    return this.http.post<any>(this._loginUrl, user)
  }
}