import { Component, OnInit } from '@angular/core';
import {SettingsService} from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(public ajustesService: SettingsService) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor( tema: string, link: any ) {
    this.aplicarCheck( link );
    this.ajustesService.aplicarTema( tema );
  }

  aplicarCheck( link: any ) {
    const selectores: any = document.getElementsByClassName('selector');
    for ( let ref of selectores) {
      ref.classList.remove('working')
    }

    link.classList.add('working');
  }

  colocarCheck() {
    const selectores: any = document.getElementsByClassName('selector');
    const tema = this.ajustesService.ajustes.tema;
    for ( let ref of selectores) {
     if (ref.getAttribute('data-theme') === tema ) {
       ref.classList.add('working');
       break;
     }
    }
  }
}