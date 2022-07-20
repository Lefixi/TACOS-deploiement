import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Menu} from "../../interfaces/menu";

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.css']
})
export class MenuDetailComponent implements OnInit {

  @Input() menu?: Menu;
  @Output() menuChanged: EventEmitter<Menu> = new EventEmitter<Menu>();

  update() {
    this.menuChanged.emit(this.menu);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
