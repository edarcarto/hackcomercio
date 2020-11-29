import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './main_components/login/login.component';
import { MainMenuComponent } from './main_components/main-menu/main-menu.component';
import { SearchCandidatesComponent } from './main_components/search-candidates/search-candidates.component';
import { CandidateProfileComponent } from './main_components/candidate-profile/candidate-profile.component';
import { ElectoralSimulatorComponent } from './main_components/electoral-simulator/electoral-simulator.component';
import { ElectoralOpinionComponent } from './main_components/electoral-opinion/electoral-opinion.component';
import { RequestService } from './services/request.service';
import { CasePartidoService } from './business/cases-use/partido.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainMenuComponent,
    SearchCandidatesComponent,
    CandidateProfileComponent,
    ElectoralSimulatorComponent,
    ElectoralOpinionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,

  ],
  providers: [
    RequestService,
    CasePartidoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
