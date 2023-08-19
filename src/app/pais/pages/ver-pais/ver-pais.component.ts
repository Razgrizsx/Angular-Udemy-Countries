import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { PaisResponse } from '../../interface/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private paisService: PaisService){}
  


  ngOnInit(): void {

    this.activatedRoute.params
      .subscribe(res => {
        console.log(res)
      })
    
    /* this.activatedRoute.params
    .subscribe( ({id}) => {

      this.paisService.buscarId(id)
      .subscribe((value) => {
        console.log(value)});
      }); */
  }
}
