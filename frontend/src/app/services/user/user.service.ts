import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../service.config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private baseUrl: string = baseUrl;

  constructor(private http: HttpClient) { }

  findAll(): Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/user`);
  }
  findById(id: number): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/user/${id}`);
  }
}
