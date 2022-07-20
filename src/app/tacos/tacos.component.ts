import { Component, OnInit } from '@angular/core';
import { Tacos } from '../../interfaces/tacos';
import { TacosService } from '../services/tacos.service';
@Component({
  selector: 'app-tacos',
  templateUrl: './tacos.component.html',
  styleUrls: ['./tacos.component.css']
})
export class TacosComponent implements OnInit {

  tacosList : Tacos[] = [];

  showTacos() {
    this.TacosService.getAllTacos().subscribe((data) => {
      console.log(data);
      this.tacosList = data;
    });
  }

  vegan : boolean = true;
  jour: number= 0;

  constructor(private TacosService : TacosService) {
  }

  ngOnInit(): void {
    this.showTacos();
  }

}
