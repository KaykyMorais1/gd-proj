import { Func } from './../modules/func.model';
import { Departamento } from '../modules/dep.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FuncService {
  constructor(private http: HttpClient) {}

  public getFunc(dep_id: any): Observable<Func[]> {
    return this.http.get<Func[]>(
      'http://localhost:3000/funcionarios/' + dep_id
    );
  }
}
