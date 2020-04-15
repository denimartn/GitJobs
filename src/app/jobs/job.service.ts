import { IJob } from './job';

import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class JobService{

  /*
   getJobs(): IJob[] {
     return [ {
       title: "Manager",
       company: "Sandalandala",
       location: "Vama Veche",
       date: "01.08.2020",
       description: "manage people and be cool"
      },
    {
      title: "programator",
       company: "Canon",
       location: "Timisoara",
       date: "01.04.2020",
       description: "write code and be socially awkward"
    }];

   }

*/

   private productUrl='https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?search=node';

  constructor(private http: HttpClient){

  }

  getJobs(): Observable<IJob[]> {
    return this.http.get<IJob[]>(this.productUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  private handleError(err: HttpErrorResponse){
     let errorMessage='';
     if(err.error instanceof ErrorEvent){
       errorMessage=`An error occures: ${err.error.message}`;
     }else{
       errorMessage=`Server returned code: ${err.status}, error msg is: ${err.message}`;
     }
     console.error(errorMessage);
     return throwError(errorMessage);
  }


}
