import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
    this.contarTres()
      .then(ok => console.log(ok))
      .catch(error => console.error('error en la promesa', error));
  }

  ngOnInit() {
  }


  contarTres(): Promise<any> {
    return new Promise((resolve, reject) => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador += 1;
        console.log(contador);

        if (contador === 3) {
          resolve({ok: true, nook: false});
          // reject('ocurrio un error');

          // termina el intervalo
          clearInterval(intervalo);
        }
      }, 1000);
    });
  }
}
