import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Representantes } from './interface/representantes';

@Injectable({
  providedIn: 'root'
})
export class DataPartidosService {

  constructor(private http: HttpClient) { }

listarPartidos(): Observable<Representantes[]>{
  return this.http.get<Representantes[]>('assets/mock-data/representantes.json')
}

}


