import { Departamento } from '../modules/dep.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DepService {
  constructor(private http: HttpClient) {}

  /*No TypeScript para você tipar a variável é usado ':'*/

  public getUsers(): Observable<any> {
    return this.http.get('http://localhost:3000/departamentos/');
  }
}
