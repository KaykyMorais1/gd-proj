import { catchError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Departamento } from '../modules/dep.model';

@Injectable({
  providedIn: 'root',
})
export class DelDepService {
  constructor(private http: HttpClient) {}

  delDep(dep_id: any): Observable<Departamento> {
    return this.http
      .delete<Departamento>('http://localhost:3000/departamentos/' + dep_id)
      .pipe(
        catchError((err) => {
          console.error(err);
          throw err;
        })
      );
  }
}
