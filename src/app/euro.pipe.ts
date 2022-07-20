import { Pipe, PipeTransform } from '@angular/core';
//12| currency:'EUR':'symbol-narrow'
// > €12
// L'idée ici est de passer la devise à droite
@Pipe({
  name: 'euro'
})
export class EuroPipe implements PipeTransform {

  transform(value: any) : string {
    return value.substring(1)+ value.substring(0,1);
  }

}
