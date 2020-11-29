import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataPartidosService} from '../data-partidos.service'
import { Representantes } from '../interface/representantes';


@Component({
  selector: 'app-representante-detail',
  templateUrl: './representante-detail.component.html',
  styleUrls: ['./representante-detail.component.css']
})
export class RepresentanteDetailComponent implements OnInit {

  representantes$:Observable<Representantes[]>;

  constructor( private DataPartidosService:DataPartidosService;

  ) { 
    this.representantes$ =  DataPartidosService.listarPartidos();
  }

  ngOnInit(): void {
  }

  listarPartidos(){
    this.representantes$ = this.DataPartidosService.listarPartidos();
  }

}
