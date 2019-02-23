import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SettingsService} from './settings.service';
import {SharedService} from './shared.service';
import {SidebarService} from './sidebar.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    SettingsService,
    SharedService,
    SidebarService
  ]
})
export class ServicesModule { }
