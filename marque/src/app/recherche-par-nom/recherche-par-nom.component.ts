import { Component, OnInit } from '@angular/core';
import { MarqueService } from '../MarqueService';
import { Marque } from '../model/marque.model';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})

export class RechercheParNomComponent implements OnInit {
  nomMarque: string = '';
  marques: Marque[] = [];
  allMarques: Marque[] = [];

  constructor(private marqueService: MarqueService) {}

  ngOnInit(): void {
    this.marqueService.listeMarques().subscribe(marques => {
      this.marques = marques;
      this.allMarques = marques; // Copiez toutes les marques pour la filtration ultérieure
    });
  }

  rechercherMarques(): void {
    this.marques = this.allMarques.filter(marque =>
      marque.nomMarque?.toLowerCase().includes(this.nomMarque.toLowerCase())
    );
  }
}
