import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { PaisResponse } from '../interface/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private paisUrl = "https://restcountries.com/v3.1/name/"
  private capitalUrl = "https://restcountries.com/v3.1/capital/"
  private idUrl = "https://restcountries.com/v3.1/alpha/"
  private regionUrl = "https://restcountries.com/v3.1/region/"

  constructor(private http : HttpClient) { }

  /* buscarPais(termino:string) : Observable<any> {
    const terminoUrl = `${this.url}${termino}`
    return this.http.get<any>(terminoUrl)
    
  } */

  buscarPais(termino:string) : Observable<PaisResponse[]> {
    const terminoUrl = `${this.paisUrl}${termino}`
    return this.http.get<PaisResponse[]>(terminoUrl)
    
  } 

  buscarCapital(termino:string) : Observable<PaisResponse[]> {
    const terminoUrl = `${this.capitalUrl}${termino}`
    return this.http.get<PaisResponse[]>(terminoUrl)
    
  } 

  buscarId(termino:string) : Observable<PaisResponse[]> {
    const terminoUrl = `${this.idUrl}${termino}`
    return this.http.get<PaisResponse[]>(terminoUrl)
    
  } 

  buscarRegion(termino:string) : Observable<PaisResponse[]>{
    const terminoUrl = `${this.regionUrl}${termino}`
    return this.http.get<PaisResponse[]>(terminoUrl)
  }

}
