import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivresComponent } from './livres/livres.component';
import { AddLivreComponent } from './add-livre/add-livre.component';
import { FormsModule } from '@angular/forms';
import { UpdateLivreComponent } from './update-livre/update-livre.component';
import { ListeTypesComponent } from './liste-types/liste-types.component';
import { RechercheParTypeComponent } from './recherche-par-type/recherche-par-type.component';

import { RechercheParTitreComponent } from './recherche-par-titre/recherche-par-titre.component';
import { UpdateTypeComponent } from './update-type/update-type.component';
@NgModule({
  declarations: [
    AppComponent,
    LivresComponent,
    AddLivreComponent,
    UpdateLivreComponent,
    ListeTypesComponent,
    RechercheParTypeComponent,
    RechercheParTitreComponent,
    UpdateTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
