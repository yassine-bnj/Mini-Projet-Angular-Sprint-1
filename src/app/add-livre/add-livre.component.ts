import { Component, OnInit } from '@angular/core';
import { Livre } from '../model/livre.model';
import { LivreService } from '../services/livre.service';
import { Type } from '../model/type.model';
@Component({
  selector: 'app-add-livre',
  templateUrl: './add-livre.component.html',
  styleUrls: ['./add-livre.component.css']
})
export class AddLivreComponent implements OnInit {
  newLivre = new Livre();
  types! : Type[];
newIdType! : number;
newType! : Type;
  constructor(private livreService: LivreService) {
  }

  ngOnInit(): void {
    this.types=this.livreService.listeTypes();
  }
  addLivre() {
    this.newType =this.livreService.consulterType(this.newIdType);
    this.newLivre.type = this.newType;
    


    this.livreService.ajouterLivre(this.newLivre)

  }

}
