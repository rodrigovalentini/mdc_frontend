import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { RatingModule } from 'ng-starrating';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingComponent } from './loading/loading.component';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    NavBarComponent,
    LoadingComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    MatCardModule,
    RatingModule,
    MatProgressSpinnerModule,
    OverlayModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NavBarComponent,
    RouterModule,
    MatCardModule,
    RatingModule,
    MatProgressSpinnerModule,
    LoadingComponent,
    OverlayModule
  ],
  providers: [],
  entryComponents: [
    LoadingComponent
  ]
})
export class SharedModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
      ],
    };
  }
 }
