import { NgModule } from '@angular/core';

// Components
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {SidebarService} from '../services/sidebar.service';
import {ServicesModule} from '../services/services.module';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    ServicesModule
  ],
  declarations: [
    BreadcrumbsComponent,
    HeaderComponent,
    NopagefoundComponent,
    SidebarComponent
  ],
  exports: [
    BreadcrumbsComponent,
    HeaderComponent,
    NopagefoundComponent,
    SidebarComponent
  ],
  providers: []
})
export class SharedModule { }
