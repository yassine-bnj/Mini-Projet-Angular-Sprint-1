import { Component, OnInit } from '@angular/core';
import { Livre } from '../model/livre.model';
import { LivreService } from '../services/livre.service';

@Component({
  selector: 'app-recherche-par-titre',
  templateUrl: './recherche-par-titre.component.html',
  styles: [
  ]
})
export class RechercheParTitreComponent implements OnInit {

  livres!:Livre[];
filtredLivres!:Livre[];
titreLivre!:string;
  constructor(private livreservice: LivreService ) { }

  ngOnInit(): void {
    this.livres=this.livreservice.listeLivres();
  }
  rechercherLivre(){
    
    this.filtredLivres = this.livres.filter((item) =>
       item.titreLivre?.toLowerCase().includes(this.titreLivre.toLowerCase()));
  }

//   onKeyUp(filterText : string){
//     this.filtredLivres = this.livres.filter(item =>
//     item.titreLivre!.toLowerCase().includes(filterText.toLowerCase()));
// }

onKeyUp(filterText : string){
  this.filtredLivres = this.livreservice.rechercheParTitre(filterText);
}

}
