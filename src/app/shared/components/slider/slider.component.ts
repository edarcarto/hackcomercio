import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CasePartidoService } from 'src/app/business/cases-use/partido.service';
import { Partido } from 'src/app/business/models/Partido.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  public partido: Partido;
  public partidosData: Partido[];
  // public ELEMENT_DATA: ProductModel[]

  constructor(private casePartido: CasePartidoService) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
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


}
