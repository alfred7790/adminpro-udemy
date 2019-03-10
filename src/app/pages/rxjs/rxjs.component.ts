import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {retry, map, filter, timeout} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subs: Subscription;

  constructor() {
    this.subs = this.contarTres()
      .subscribe(cont => console.log(cont),
        error => console.error(error),
        () => console.log('complete'));

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('Desubscribiendo...');
    this.subs.unsubscribe();
  }

  contarTres(): Observable<any> {
    return new Observable(observer => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador += 1;
        observer.next({contador: contador});
        /*if (contador === 10) {
          clearInterval(intervalo);
          observer.complete();
        }*/
      }, 1000);
    }).pipe(
      // timeout(500),
      retry(4),
      map(respuesta => respuesta['contador']),
      /*filter((valor, index) => {
        if ((valor % 2) === 1 ) {
          return true;
        }
        return false;
      })*/
      );
  }

}
