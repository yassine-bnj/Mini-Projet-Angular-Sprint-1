import { Component, OnInit } from '@angular/core';
import { Livre } from '../model/livre.model';
import { Type } from '../model/type.model';
import { LivreService } from '../services/livre.service';

@Component({
  selector: 'app-recherche-par-type',
  templateUrl: './recherche-par-type.component.html',
  styles: [
  ]
})
export class RechercheParTypeComponent implements OnInit {
livres!:Livre[];
IdType!:number;
types!: Type[];
  constructor(private livreService:LivreService) { }

  ngOnInit(): void {
    this.types=this.livreService.listeTypes();
  }

  onChange() {
    // console.log(this.IdCategorie);
   
     this.livres =  this.livreService.RechercheParType(this.IdType);
     
     }

     supprimerLivre(l: Livre) {
      //console.log(p);
      let conf = confirm("Etes-vous sûr ?");
      if (conf){
      
         this.livreService.supprimerLivre(l);
  
         this.livres =  this.livreService.RechercheParType(this.IdType);
         console.log(this.livres);
      }
    
    }

}
