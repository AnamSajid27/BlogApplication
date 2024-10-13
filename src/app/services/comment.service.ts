import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

const URL =  "http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http :HttpClient,readonly injector: Injector, readonly router: Router) { }


  getHeaders() {    
    const Headers: any = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });
    return { headers: Headers };
  }


  createComment(id:number,postedBy:string,content:string):Observable<any>{
    const params = {
      id:id,
      postedBy:postedBy
    }
    return this.http.post<any>(URL + `api/comments/create`,content,{params});
  }

  getComments(id:number):Observable<any>{
    return this.http.get<any>(URL + `api/comments/${id}`,this.getHeaders());
  }



}
