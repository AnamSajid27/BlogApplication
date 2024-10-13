import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

const URL =  "http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private http :HttpClient,readonly injector: Injector, readonly router: Router) { }

  getHeaders() {    
    const Headers: any = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });
    return { headers: Headers };
  }

  createPost(data:any):Observable<any>{
    return this.http.post(URL + `api/post`, data,this.getHeaders());
  }

  getAllPost():Observable<any>{
    return this.http.get(URL + `api/post`,this.getHeaders());
  }

  getPostById(id:number):Observable<any>{
    return this.http.get(URL + `api/post/${id}`,this.getHeaders());
  }


  likePost(id:number):Observable<any>{
    return this.http.put(URL + `api/post/${id}/like`,{},this.getHeaders());
  }

  searchByName(name:string):Observable<any>{
    return this.http.get(URL + `api/post/search/${name}`,this.getHeaders());
  }
 
}
