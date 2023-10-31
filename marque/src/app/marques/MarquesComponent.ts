import { Component, OnInit } from '@angular/core';
import { Marque } from '../model/marque.model';
import { MarqueService } from '../MarqueService';

@Component({
  selector: 'app-marques',
  templateUrl: './marques.component.html'
})
export class MarquesComponent implements OnInit {
  marques: Marque[] = []; // un tableau de Marque

  constructor(private marqueService: MarqueService) { }

  ngOnInit(): void {
    this.marqueService.listeMarques().subscribe(mar => {
      console.log(mar);
      this.marques = mar;
    })
        }

  chargerMarques(): void {
    this.marqueService.listeMarques().subscribe(
      (marques: Marque[]) => {
        console.log(marques);
        this.marques = marques;
      },
      (error: any) => {
        console.error('Une erreur s\'est produite lors du chargement des marques :', error);
      }
    );
  }

  supprimerMarque(marque: Marque): void {
    let conf = confirm("Etes-vous sûr ?");
    if (conf && marque.idMarque !== undefined) {
      this.marqueService.supprimerMarque(marque.idMarque).subscribe(
        () => {
          console.log("Marque supprimée avec succès !");
          this.chargerMarques();
        },
        (error: any) => {
          console.error('Une erreur s\'est produite lors de la suppression de la marque :', error);
        }
      );
    }
  }
}
