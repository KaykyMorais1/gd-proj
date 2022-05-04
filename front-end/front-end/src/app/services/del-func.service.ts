import { Observable, catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Func } from '../modules/func.model';

@Injectable({
  providedIn: 'root'
})
export class DelFuncService {

constructor(private http: HttpClient) { }

delFunc(func_id: any): Observable<Func>{
  return this.http.delete<Func>('http://localhost:3000/funcionarios/' + func_id)
  .pipe(
    catchError((err) =>{
      console.error(err);
      throw err;
    })
  )
}

}
