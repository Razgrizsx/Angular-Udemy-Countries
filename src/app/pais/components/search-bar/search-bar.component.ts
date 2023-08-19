import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter()

  @Output() onDebounce : EventEmitter<string> = new EventEmitter()

  debouncer : Subject<string> = new Subject()

  @Input() placeholder : string = 'Por'

  termino : string = ''

  buscar = () => {
    this.onEnter.emit(this.termino)
  }

  tecla = () => {
    this.debouncer.next(this.termino)
  }

  ngOnInit() {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe( valor => {this.onDebounce.emit(valor)})
  }
}
