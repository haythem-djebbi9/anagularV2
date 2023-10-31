import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarqueService } from '../MarqueService';
import { Marque } from '../model/marque.model';
import { Pays } from '../model/pays.model';

@Component({
  selector: 'app-update-marque',
  templateUrl: './update-marque.component.html',
  styleUrls: ['./update-marque.component.css']
})
export class UpdateMarqueComponent implements OnInit {
  currentMarque: Marque = new Marque();
  pays: Pays[] = [];
  updatedPaysId!: number;

  constructor(private activatedRoute: ActivatedRoute, private marqueService: MarqueService, private router: Router) { }

  ngOnInit() {
    this.marqueService.listePays().
    subscribe(pa => {this.pays = pa;
      console.log(pa);
  });

    this.marqueService.consulterMarque(this.activatedRoute.snapshot.params['id']).subscribe(marque => {
      this.currentMarque = marque;
      this.updatedPaysId = this.currentMarque.pays.idPays;
    });
  }

  updateMarque(): void {
    this.currentMarque.pays = this.pays.find(pays => pays.idPays == this.updatedPaysId);
    if (this.currentMarque.pays) {
      this.marqueService.updateMarque(this.currentMarque).subscribe(marque => {
        this.router.navigate(['marques']);
      });
    }
  }
}
