import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { PortalRoutingModule } from './portal.routes';
import { SharedModule } from '../shared/shared.module';
import { PortalComponent } from './portal.component';
import { RouterModule } from '@angular/router';
import { ClientsComponent } from './pages/clients/clients.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [PortalComponent, HomeComponent, ClientsComponent, AboutComponent],
  imports: [
    CommonModule,
    PortalRoutingModule,
    SharedModule
  ]
})
export class PortalModule { }
