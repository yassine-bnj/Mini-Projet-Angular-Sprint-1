import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Livre } from '../model/livre.model';
import { Type } from '../model/type.model';
import { RechercheParTypeComponent } from '../recherche-par-type/recherche-par-type.component';

@Injectable({
  providedIn: 'root'
})
export class LivreService {

  livres: Livre[];
  types!: Type[]
  livre!: Livre;
  livreRecherche!:Livre[];
  constructor(private router: Router) {
    this.types = [{idType: 1,nomType:"bande dessiné"},
    {idType:2 , nomType:"roman"},
    {idType:3,nomType:"magazine"}

    ]
    this.livres = [
      { idLivre: 1, titreLivre: "Bonjour Tristesse", auteurLivre: "Françoise Sagan", prixLivre: 50, dateParution: new Date("07-18-2007"),type:{idType:2 , nomType:"roman"} },
      { idLivre: 2, titreLivre: "Lolita", auteurLivre: "Vladimir Nabokov", prixLivre: 60, dateParution: new Date("05-23-2001"),type:{idType:2 , nomType:"roman"}  },
      { idLivre: 3, titreLivre: "La nuit du chasseur", auteurLivre: "Davis Grubb", prixLivre: 70, dateParution: new Date("11-30-2001"),type:{idType:2 , nomType:"roman"}  },
    ]


  }
  listeLivres(): Livre[] {
    return this.livres;
  }
  ajouterLivre(liv: Livre) {
    this.livres.push(liv);
    this.router.navigate(['/livres']);
  }
  supprimerLivre(liv: Livre) {

    const index = this.livres.indexOf(liv, 0);
    if (index > -1) {
      this.livres.splice(index, 1);
    }

  }
  consulterLivre(id: number): Livre {
    this.livre = this.livres.find(l => l.idLivre == id)!;
    return this.livre;
  }
  trierLivres() {
    this.livres = this.livres.sort((n1, n2) => {
      if (n1.idLivre! > n2.idLivre!) {
        return 1;
      }
      if (n1.idLivre! < n2.idLivre!) {
        return -1;
      }
      return 0;
    });
  }
  updateLivre(l: Livre) {

    this.supprimerLivre(l);
    this.ajouterLivre(l);
    this.trierLivres();
  }
  listeTypes():Type[] {
    return this.types;
    }
    consulterType(id:number): Type{
      return this.types.find(t => t.idType == id)!;
      }


       RechercheParType(id:number): Livre []{
    this.livreRecherche=[];
this.livres.forEach((cur,index)=>{
if(id==cur.type.idType){
  this.livreRecherche.push(cur);
}

})
return this.livreRecherche;
       }

       rechercheParTitre(filterText : string){
        return  this.livres.filter(item =>
        item.titreLivre!.toLowerCase().includes(filterText.toLowerCase()));
    }       

ajouterType( type: Type){
   this.types.push(type);
        }


supprimerType(t: Type) {

          const index = this.types.indexOf(t, 0);
          if (index > -1) {
            this.types.splice(index, 1);
          }
      
        }
updateType(t:Type){
  this.supprimerType(t);
  this.ajouterType(t);
}
        
}
