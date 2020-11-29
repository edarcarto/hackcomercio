import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { SliderComponent } from './components/slider/slider.component';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PrincipalComponent,
    CategoriaComponent,
    SliderComponent,

   
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PrincipalComponent,
    CategoriaComponent,
    SliderComponent,
  ]
})
export class SharedModule { }
