import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pays } from '../model/pays.model';

@Component({
  selector: 'app-update-pay',
  templateUrl: './update-pay.component.html',
  styleUrls: ['./update-pay.component.css']
})

  export class UpdatePayComponent implements OnInit {
    @Input()
    pay!: Pays;
  
    @Input()
  ajout!:boolean;
    updatedPay: Pays = {
      "idPays": 0, 
      "nomPays": "",
      "continent": ""
    };
  
    @Output()
    payUpdated = new EventEmitter<Pays>();
  
    constructor() { }
  
    ngOnInit(): void {
      console.log("ngOnInit du composant UpdatePay ", this.pay);
    }
  
    savePay() {
      // Mettez à jour l'objet pay ici avec les valeurs de updatedPay si nécessaire
      
      // Émettez l'événement avec l'objet pay mis à jour
      this.payUpdated.emit(this.pay);
    }
    modeAjout()
    {
      this.ajout=true;
      this.pay.idPays = 0;
      this.pay.nomPays="";
    }
  }

