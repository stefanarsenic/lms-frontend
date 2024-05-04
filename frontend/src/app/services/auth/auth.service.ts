import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../service.config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = baseUrl;

  constructor(private http: HttpClient) { }

  register(data: any): Observable<any>{
    return this.http.post(`${this.baseUrl}/api/auth/register`, data);
  }
  authenticate(data: any): Observable<any>{
    return this.http.post(`${this.baseUrl}/api/auth/authenticate`, data);
  }
}
