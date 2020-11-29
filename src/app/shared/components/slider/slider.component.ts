import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CasePartidoService } from 'src/app/business/cases-use/partido.service';
import { Partido } from 'src/app/business/models/Partido.model';
import { CaseCandidatoService } from 'src/app/business/cases-use/candidato.service';
import { Candidato } from 'src/app/business/models/Candidato.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  public partido: Partido;
  public partidosData: Partido[];
  public candidato: Candidato;
  public candidatoData: Candidato[];
  

  constructor(
    private casePartido: CasePartidoService,
    private caseCandidato: CaseCandidatoService
    ) { }

  ngOnInit(): void {
    this.loadPartidos()
    this.loadCandidatos()
  }

  loadPartidos() {
    this.partido = undefined;
    this.casePartido.getAll().subscribe(
       res => {
          this.partidosData = res
       },
       error => {
          console.log(error)
       }
    )
 }

 loadCandidatos() {
  this.candidato = undefined;
  this.caseCandidato.getAll().subscribe(
     res => {
        this.candidatoData = res
     },
     error => {
        console.log(error)
     }
  )
}

searchCandidatos(partido){

  this.caseCandidato.getWithParams(partido).subscribe(
    res => {
       this.candidatoData = res
    },
    error => {
       console.log(error)
    }
 )
}

setCandidato(){
  console.log(this);
}

}
