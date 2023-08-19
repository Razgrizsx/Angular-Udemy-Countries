import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { PaisResponse } from '../../interface/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  paises : PaisResponse[] = []
  termino : string = ''
  error : boolean = false
  placeholder : string = 'Por Pais...'

  buscar = (event : string) => {

    this.error = false
    this.termino = event

    this.paisService.buscarPais(this.termino)
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
