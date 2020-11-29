import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable()
export class RequestService {
   public env = environment;
   public access_token: string

   constructor(public http: HttpClient) {
      if (localStorage.getItem('auth')) {
         this.access_token = JSON.parse(localStorage.getItem('auth')).access_token
      }
   }

   getLocally(url: any): Observable<any> {
      return this.http.get(url)
   }

   postLocally(url: any, data: any): Observable<any> {
      console.log(data)
      return this.http.post(url, data)
   }

   get(endpoint: string, data?: any): Observable<any> {
      var headers = new HttpHeaders()
      if (localStorage.getItem('auth')) {
         headers = headers.set('Authorization','Bearer '+JSON.parse(localStorage.getItem('auth')).access_token)
      }
      headers = headers.set('Content-Type', 'application/json');
      if(data != null){
         return this.http.get(this.env.baseUrl + endpoint, { headers: headers, params: data })
      }else{
         return this.http.get(this.env.baseUrl + endpoint, { headers: headers })
      }
   }

   post(endpoint: string, data: any): Observable<any> {
      var headers = new HttpHeaders()
      if (localStorage.getItem('auth')) {
         headers = headers.set('Authorization','Bearer '+JSON.parse(localStorage.getItem('auth')).access_token)
      }
      headers = headers.set('Content-Type', 'application/json')
      return this.http.post(this.env.baseUrl + endpoint, data, { headers: headers })
   }

   put(endpoint: string, data: any): Observable<any> {
      var headers = new HttpHeaders()
      if (localStorage.getItem('auth')) {
         headers = headers.set('Authorization','Bearer '+JSON.parse(localStorage.getItem('auth')).access_token)
      }
      headers = headers.set('Content-Type', 'application/json')
      return this.http.put(this.env.baseUrl + endpoint, data, { headers: headers })
   }

   delete(endpoint: string): Observable<any> {
      var headers = new HttpHeaders()
      if (localStorage.getItem('auth')) {
         headers = headers.set('Authorization','Bearer '+JSON.parse(localStorage.getItem('auth')).access_token)
      }
      return this.http.delete(this.env.baseUrl + endpoint, { headers: headers })
   }
}