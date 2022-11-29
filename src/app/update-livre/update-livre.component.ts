import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livre } from '../model/livre.model';
import { Type } from '../model/type.model';
import { LivreService } from '../services/livre.service';

@Component({
  selector: 'app-update-livre',
  templateUrl: './update-livre.component.html',
  styles: [
  ]
})
export class UpdateLivreComponent implements OnInit {
  currentLivre = new Livre();
  types! : Type[];
updatedTypeId! : number;
  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private livreService: LivreService) { }

  ngOnInit() {
    this.types=this.livreService.listeTypes()
    this.currentLivre = this.livreService.consulterLivre(this.activatedRoute.snapshot.params['id']);
    this.updatedTypeId=this.currentLivre.type.idType;

    console.log(this.currentLivre);

  }
  updateLivre() {
    this.currentLivre.type=this.livreService.consulterType(this.updatedTypeId)
    this.livreService.updateLivre(this.currentLivre);
    this.router.navigate(['livres']);
  }

}
