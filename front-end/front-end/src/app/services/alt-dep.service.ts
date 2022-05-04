import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Departamento } from '../modules/dep.model';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AltDepService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token',
    }),
  };

  altDep(user: Departamento, dep_id: any): Observable<Departamento> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(user);
    console.log(body);
    return this.http
      .put<Departamento>('http://localhost:3000/' + 'departamentos/' + dep_id, body, {
        headers: headers,
      })
      .pipe();
  }
}
