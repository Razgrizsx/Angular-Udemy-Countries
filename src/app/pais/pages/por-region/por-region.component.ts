import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { PaisResponse } from '../../interface/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {

  regiones: string[] = ["africa", "americas", "asia", "europe", "oceania"]
  regionActiva : string = ''
  paises : PaisResponse[] = []
  error : boolean = false

  constructor(private paisService : PaisService){}

  getClassCSS(region :String){
    return  (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

  activarRegion(region: string){
    this.regionActiva = region
    this.paisService.buscarRegion(region)
    .subscribe({
      next:(paises) => {this.paises = paises, console.log(paises)},
      error: (err) => {this.error = true; this.paises = []}
    })
  }
}
