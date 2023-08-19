import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs';
import { PaisResponse } from '../../interface/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private paisService: PaisService){}
  
  pais! : PaisResponse

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ( {id} ) => this.paisService.buscarId( id ) ),
        tap(console.log)
      )
      .subscribe(resp => {
        this.pais = resp[0]
      })
    
    /* this.activatedRoute.params
    .subscribe( ({id}) => {

      this.paisService.buscarId(id)
      .subscribe((value) => {
        console.log(value)});
      }); */
  }
}
