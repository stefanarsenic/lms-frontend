import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../service.config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = baseUrl;

  findAll(): Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/user`);
  }
  findById(id: number): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/user/${id}`);
  }
  register(data: any): Observable<any>{
    return this.http.post(`${this.baseUrl}/api/auth/register`, data);
  }
  authenticate(data: any): Observable<any>{
    return this.http.post(`${this.baseUrl}/api/auth/authenticate`, data);
  }

}
