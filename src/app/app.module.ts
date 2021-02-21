import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { OverviewComponent } from './components/overview/overview.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuEntryComponent } from './components/menu-entry/menu-entry.component';
import { AppRoutingModule } from './app-routing.module';
import { SettingsComponent } from './components/settings/settings.component';
import { SalesmenTableComponent } from './components/salesmen-table/salesmen-table.component';
import { SalesmenTableEntryComponent } from './components/salesmen-table-entry/salesmen-table-entry.component';
import { SalesmanInfoComponent } from './components/salesman-info/salesman-info.component';
import { SalesmanDetailsComponent } from './components/salesman-details/salesman-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EvaluationRecordTableComponent } from './components/evaluation-record-table/evaluation-record-table.component';
import { EvaluationRecordTableEntryComponent } from './components/evaluation-record-table-entry/evaluation-record-table-entry.component';
import { ModalComponent } from './components/modal/modal.component';
import { BonusComponent } from './components/bonus/bonus.component';
import { SalesTableComponent } from './components/sales-table/sales-table.component';
import { SalesTableEntryComponent } from './components/sales-table-entry/sales-table-entry.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { UserManagementTableComponent } from './components/user-management-table/user-management-table.component';
import { UserManagementTableEntryComponent } from './components/user-management-table-entry/user-management-table-entry.component';
import { AccountPermissionMessageComponent } from './components/account-permission-message/account-permission-message.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OverviewComponent,
    MenuComponent,
    MenuEntryComponent,
    SettingsComponent,
    SalesmenTableComponent,
    SalesmenTableEntryComponent,
    SalesmanInfoComponent,
    SalesmanDetailsComponent,
    NotFoundComponent,
    EvaluationRecordTableComponent,
    EvaluationRecordTableEntryComponent,
    ModalComponent,
    BonusComponent,
    SalesTableComponent,
    SalesTableEntryComponent,
    UserManagementComponent,
    UserManagementTableComponent,
    UserManagementTableEntryComponent,
    AccountPermissionMessageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
