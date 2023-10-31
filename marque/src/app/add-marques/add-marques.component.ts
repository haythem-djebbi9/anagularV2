import { Component, OnInit } from '@angular/core';
import { Marque } from '../model/marque.model';
import { MarqueService } from '../MarqueService';
import { Router } from '@angular/router';
import { Pays } from '../model/pays.model'; 

@Component({
  selector: 'app-add-marque',
  templateUrl: './add-marques.component.html',
})
export class AddMarqueComponent implements OnInit {
  newMarque: Marque = new Marque();
  pays! : Pays[];
  newIPays!:number;
  newPays!:Pays;

  constructor(private marqueService: MarqueService, private router: Router) {}

  ngOnInit(): void {
    this.marqueService.listePays().
    subscribe(pa => {this.pays = pa;
      console.log(pa);
  });

  }

  addMarque(): void {
    this.newMarque.pays = this.pays.find(pa => pa.idPays == this.newIPays)!;
    this.marqueService.ajouterMarque(this.newMarque)
                      .subscribe(prod => {
                      console.log(prod);
                      this.router.navigate(['marques']);
                      }); 
    }
}
