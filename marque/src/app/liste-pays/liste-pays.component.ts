import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MarqueService } from '../MarqueService';
import { Pays } from '../model/pays.model';

@Component({
  selector: 'app-liste-pays',
  templateUrl: './liste-pays.component.html',
  styleUrls: ['./liste-pays.component.css']
})
export class ListePaysComponent implements OnInit {
  payss: Pays[] = [];
  updatedPay: Pays = { idPays: 0, nomPays: '', continent: '' };
  ajout = true;

  @Output()
  payUpdated = new EventEmitter<Pays>();

  constructor(private marqueService: MarqueService) {}

  ngOnInit(): void {
    this.chargerPays();
  }

  chargerPays() {
    this.marqueService.listePays().subscribe(pa => {
      this.payss = pa;
      console.log(pa);
    });
  }

  updatePay(pay: Pays) {
    this.updatedPay = pay;
    this.ajout = false;
  }

 

  
    
  }

