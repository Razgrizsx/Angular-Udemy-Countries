import { Component } from '@angular/core';
import { PaisResponse } from '../../interface/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {
  paises : PaisResponse[] = []
  termino : string = ''
  error : boolean = false
  placeholder : string = "Por Capital..."
 
  buscar = (event : string) => {

    this.error = false
    this.termino = event

    this.paisService.buscarCapital(this.termino)
    .subscribe({
      next:(paises) => {this.paises = paises},
      error: (err) => {this.error = true; this.paises = []}
    })

  }

  sugerencias  = (termino : string) => {
    this.error = false 
    console.log(termino)
  }

  constructor(private paisService : PaisService){}
}
