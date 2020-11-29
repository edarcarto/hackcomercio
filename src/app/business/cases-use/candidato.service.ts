import { Injectable } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { Observable } from 'rxjs';
import { Candidato } from '../models/Candidato.model';

@Injectable()
export class CaseProductService {

   constructor(
      private requestService: RequestService
   ) { }

   public getAll(): Observable<Candidato[]> {
      return new Observable(observer => {
         this.requestService.get("/candidatos").subscribe(res => {
            observer.next(res.data);
         }, error => {
            observer.error(error)
         })
      })
   }

   public get(id): Observable<Candidato> {
      return new Observable(observer => {
         this.requestService.get("candidatos/" + id).subscribe((area: Candidato) => {
            observer.next(area);
         }, error => {
            observer.error(error)
         })
      })
   }

   public post(data: Candidato): Observable<any> {
      return new Observable(observer => {
         this.requestService.post("candidatos", data).subscribe(res => {
            observer.next(res.data);
         }, error => {
            observer.error(error)
         })
      })
   }

   public put(data: Candidato): Observable<any> {
      return new Observable(observer => {
         this.requestService.put("candidatos/" + data.cod_candidato, data).subscribe(res => {
            observer.next(res.data);
         }, error => {
            observer.error(error)
         })
      })
   }

   public delete(id): Observable<any> {
      return new Observable(observer => {
         this.requestService.delete("candidatos/" + id).subscribe(res => {
            observer.next(res);
         }, error => {
            observer.error(error)
         })
      })
   }

}