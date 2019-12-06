import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PortalComponent } from './portal.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: '', component: PortalComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'clients', component: ClientsComponent },
      { path: 'about', component: AboutComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
