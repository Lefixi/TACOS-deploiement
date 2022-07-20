import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Menu} from "../../interfaces/menu";

@Component({
  selector: 'app-menu-panier',
  templateUrl: './menu-panier.component.html',
  styleUrls: ['./menu-panier.component.css']
})
export class MenuPanierComponent implements OnInit {
  prixPanier: number =0;
  constructor() { }
  @Input() menu?: Menu;
  @Output() panierChanged: EventEmitter<Menu> = new EventEmitter<Menu>();
  @Output() priceChanged: EventEmitter<number> = new EventEmitter<number>();


  update(menuAdd : Menu ) {
    this.panierChanged.emit(menuAdd);
    this.updatePrice(menuAdd.price);
  }

  updatePrice(price : number ) {
    this.prixPanier += price;
    this.priceChanged.emit(price);
  }


  ngOnInit(): void {
  }

}
