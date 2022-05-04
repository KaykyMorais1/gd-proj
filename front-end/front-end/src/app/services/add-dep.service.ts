import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Departamento } from '../modules/dep.model';

@Injectable({
  providedIn: 'root',
})
export class AddDepService {

  constructor(private http: HttpClient) {}

  addDep(dep: Departamento): Observable<Departamento> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(dep);
    console.log(body);

    return this.http
      .post<Departamento>('http://localhost:3000/' + 'departamentos', body, {
        headers: headers,
      })
      .pipe(
        catchError((err) => {
          console.error(err);
          throw err;
        })
      );
  }
}
