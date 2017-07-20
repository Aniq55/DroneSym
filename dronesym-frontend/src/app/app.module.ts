import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { MaterializeModule } from 'angular2-materialize';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { DroneDataService } from './drone-service/drone-data.service';
import { CursorTooltipComponent } from './cursor-tooltip/cursor-tooltip.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { DroneOptionBoxComponent } from './drone-option-box/drone-option-box.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: '**',
    component: LoginComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CursorTooltipComponent,
    ConfirmDialogComponent,
    DroneOptionBoxComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    HttpModule,
    AgmCoreModule.forRoot({
    	apiKey: environment.mapsApiKey
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DroneDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
