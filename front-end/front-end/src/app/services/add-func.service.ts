import { catchError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Func } from '../modules/func.model';

@Injectable({
  providedIn: 'root'
})
export class AddFuncService {

  constructor(private http : HttpClient) { }

  addFunc(func: Func): Observable<Func>{
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(func);
    console.log(body);

    return this.http.post<Func>('http://localhost:3000/' + 'funcionarios', body, {
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
