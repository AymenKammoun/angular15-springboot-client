import { Injectable } from '@angular/core';
import​ { HttpClient } ​from​​'@angular/common/http'​;
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private baseUrl = 'http://localhost:8080/api/v1/accounts';
  constructor(private http: HttpClient) { }

  getAccountsList(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  getAccount(id:number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  deleteAccount(id:number) : Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`,{responseType:'text'});
  }

  createAccount(account : Object) : Observable<Object>{
    return this.http.post(`${this.baseUrl}`,account);
  }

}
