import { Component, OnInit } from '@angular/core';
import { Menu } from '../../interfaces/menu';
import { MenuService } from '../services/menu.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuList : Menu[] = [];
  selectedMenu?: Menu;
  menuChanged?:Menu;
  panierChanged: Menu[] = [];
  totalPrice: number = 0;

  showMenu() {
      this.MenuService.getAllMenu().subscribe((data) => {
      console.log(data);
      this.menuList = data;
    });
  }

    vegan : boolean = true;
    jour: number= 0;

  constructor(private MenuService : MenuService) {
  }

  update(menuReceived : Menu): void {
    this.menuChanged = menuReceived;
  }

  updatePanier(menuReceived: Menu): void {
    this.panierChanged.push(menuReceived) ;
  }
  updatePrice(priceReceived : number) : void{
    this.totalPrice += priceReceived;

  }

    ngOnInit(): void {
    this.showMenu();
  }
  onSelect(menu: Menu): void {
    this.selectedMenu = menu;
  }

}
