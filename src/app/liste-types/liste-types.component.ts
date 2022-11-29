import { Component, Input, OnInit } from '@angular/core';
import { Type } from '../model/type.model';
import { LivreService } from '../services/livre.service';

@Component({
  selector: 'app-liste-types',
  templateUrl: './liste-types.component.html',
  styles: [
  ]
})
export class ListeTypesComponent implements OnInit {
  ajout:boolean=true;
types!:Type[];
updatedType:Type = {"idType":0,"nomType":""};

  constructor(private livreService:LivreService) { }

  ngOnInit(): void {
this.types=this.livreService.listeTypes();

  }

  supprimerType(t: Type) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.livreService.supprimerType(t);
  }


  typeUpdated(t:Type){
    console.log("type udated ",t);
    if(this.ajout){
      this.livreService.ajouterType(t);
    }else{
      this.updateType(t);
    }
    
    }

  updateType(t:Type) {
      this.updatedType=t;
      this.ajout=false;
      }

}
