import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { OverviewComponent } from "./components/overview/overview.component";
import { LoginComponent } from "./components/login/login.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { LoginGuard } from "./LoginGuard";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'overview', component: OverviewComponent, canActivate: [LoginGuard]},
  {path: 'settings', component: SettingsComponent, canActivate: [LoginGuard]}
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
