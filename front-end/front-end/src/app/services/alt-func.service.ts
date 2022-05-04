import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Func } from '../modules/func.model';

@Injectable({
  providedIn: 'root',
})
export class AltFuncService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token',
    }),
  };

  altFunc(func: Func, func_id: any): Observable <Func> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(func);
    console.log(body);
    return this.http.put<Func>('http://localhost:3000/' + 'funcionarios/' + func_id, body, {
      headers: headers,
    })
    .pipe();
  }

}
