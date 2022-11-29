import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLivreComponent } from './add-livre/add-livre.component';
import { ListeTypesComponent } from './liste-types/liste-types.component';
import { LivresComponent } from './livres/livres.component';
import { RechercheParTitreComponent } from './recherche-par-titre/recherche-par-titre.component';
import { RechercheParTypeComponent } from './recherche-par-type/recherche-par-type.component';
import { UpdateLivreComponent } from './update-livre/update-livre.component';

const routes: Routes = [
  { path: "livres", component: LivresComponent },
  { path: "add-livre", component: AddLivreComponent },
  { path: "", redirectTo: "livres", pathMatch: "full" },
  { path: "updateLivre/:id", component: UpdateLivreComponent },
  {path: "rechercheParType", component : RechercheParTypeComponent},
  {path: "rechercheParTitre", component : RechercheParTitreComponent},
  {path: "listeTypes", component : ListeTypesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
