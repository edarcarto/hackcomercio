import { Injectable } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { Observable } from 'rxjs';
import { Partido } from '../models/Partido.model';

@Injectable()
export class CasePartidoService {

   constructor(
      private requestService: RequestService
   ) { }

   public getAll(): Observable<Partido[]> {
      return new Observable(observer => {
         
         this.requestService.get("/partido-politicos", {
            "offset": 0,
            "limit": 100,
            "skip": 0,
            "order": "string",
            "where": {
              "additionalProp1": {}
            },
            "fields": {
              "cod_partido": true,
              "nombre": true,
              "pag_web": true,
              "url_planGobierno": true
            }
          }).subscribe(res => {
             console.log("res",res);
            observer.next(res);
         }, error => {
            observer.error(error)
         })
      })
   }

   public get(id): Observable<Partido> {
      return new Observable(observer => {
         this.requestService.get("/partido-politicos" + id).subscribe((area: Partido) => {
            observer.next(area);
         }, error => {
            observer.error(error)
         })
      })
   }

   public post(data: Partido): Observable<any> {
      return new Observable(observer => {
         this.requestService.post("/partido-politicos", data).subscribe(res => {
            observer.next(res.data);
         }, error => {
            observer.error(error)
         })
      })
   }

   public put(data: Partido): Observable<any> {
      return new Observable(observer => {
         this.requestService.put("/partido-politicos" + data.cod_partido, data).subscribe(res => {
            observer.next(res.data);
         }, error => {
            observer.error(error)
         })
      })
   }

   public delete(id): Observable<any> {
      return new Observable(observer => {
         this.requestService.delete("/partido-politicos" + id).subscribe(res => {
            observer.next(res);
         }, error => {
            observer.error(error)
         })
      })
   }

}