import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { OverviewComponent } from "./components/overview/overview.component";
import { LoginComponent } from "./components/login/login.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { LoginGuard } from "./LoginGuard";
import {SalesmanDetailsComponent} from "./components/salesman-details/salesman-details.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {BonusComponent} from "./components/bonus/bonus.component";
import {UserManagementComponent} from "./components/user-management/user-management.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'overview', component: OverviewComponent, canActivate: [LoginGuard]},
  {path: 'users', component: UserManagementComponent, canActivate: [LoginGuard]},
  {path: 'settings', component: SettingsComponent, canActivate: [LoginGuard]},
  {path: 'salesman/:id', component: SalesmanDetailsComponent, canActivate: [LoginGuard]},
  {path: 'salesman/:id/bonus', component: BonusComponent, canActivate: [LoginGuard]},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  providers:[
    LoginGuard
  ]
})
export class AppRoutingModule { }
