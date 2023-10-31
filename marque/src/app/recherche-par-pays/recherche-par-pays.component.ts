import { Component, OnInit } from '@angular/core';
import { MarqueService } from '../MarqueService';
import { Pays } from '../model/pays.model';
import { Marque } from '../model/marque.model';

@Component({
  selector: 'app-recherche-par-pays',
  templateUrl: './recherche-par-pays.component.html',
  styleUrls: ['./recherche-par-pays.component.css']
})
export class RechercheParPaysComponent implements OnInit {
  pays: Pays[] = [];
  marques: Marque[] = [];
  IdPays! : number;

  constructor(private marqueService: MarqueService) {}

  ngOnInit(): void {
    this.marqueService.listePays().subscribe(pa => {
      console.log(pa);
      this.pays = pa;
    })
    this.marqueService.listeMarques().subscribe(mar => {
      console.log(mar);
      this.marques = mar;
    })


  }

  onChange() {
    this.marqueService.rechercherParPays(this.IdPays).
    subscribe(prods =>{this.marques=prods
    
    });
    }

}
