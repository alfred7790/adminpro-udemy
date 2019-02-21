import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  constructor() { }

  @Input() leyenda = 'Leyenda';
  @Input() progreso = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  @ViewChild('txtprogress') txtProgress: ElementRef;

  ngOnInit() {
  }

  onChanges(newValue: number) {
    console.log('=====', this.txtProgress);

    if (newValue >= 100 ) {
      this.progreso = 100;
      return;
    } else if (newValue <= 0 ) {
      this.progreso = 0;
      return;
    } else {
      this.progreso = newValue;
    }

    this.txtProgress.nativeElement.value = this.progreso;

    this.cambioValor.emit(this.progreso);
  }

  cambiarValor(valor: number) {
    if (this.progreso >= 100 && valor > 0) {
      return;
    }
    if (this.progreso <= 0 && valor < 0) {
      return;
    }
    this.progreso = this.progreso + valor;

    this.cambioValor.emit( this.progreso );
    this.txtProgress.nativeElement.focus();
  }

}
