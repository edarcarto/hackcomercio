import { Injectable } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { Observable } from 'rxjs';
import { Candidato } from '../models/Candidato.model';

@Injectable()
export class CaseCandidatoService {

   constructor(
      private requestService: RequestService
   ) { }

   public getAll(): Observable<Candidato[]> {
      return new Observable(observer => {
         this.requestService.get("/candidatos").subscribe(res => {
            observer.next(res);
         }, error => {
            observer.error(error)
         })
      })
   }

   public getWithParams(partido): Observable<Candidato[]> {
      return new Observable(observer => {
         var params = {
            "offset": 0,
            "limit": 100,
            "skip": 0,
            "order": "string",
            "where": {
              "cod_partido": partido
            },
            "fields": {
              "cod_candidato": true,
              "nombres": true,
              "apellido_paterno": true,
              "apellido_materno": true,
              "dni": true,
              "fecha_nac": true,
              "cod_ubigeo": true,
              "facebook": true,
              "twitter": true,
              "url_foto": true,
              "cod_partido": true
            },
            "include": [
              {
                "relation": "string",
                "scope": {
                  "offset": 0,
                  "limit": 100,
                  "skip": 0,
                  "order": "string",
                  "where": {
                    "additionalProp1": {}
                  },
                  "fields": {
                    "additionalProp1": {}
                  },
                  "include": [
                    {
                      "additionalProp1": {}
                    }
                  ]
                }
              }
            ]
          };
         this.requestService.get("/candidatos",).subscribe(res => {
            observer.next(res);
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