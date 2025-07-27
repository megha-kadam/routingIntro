import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { UsersComponent } from './shared/components/users/users.component';
import { ProductDashboardComponent } from './shared/components/product-dashboard/product-dashboard.component';
import { HomeComponent } from './shared/components/home/home.component';
import { FairsDashboardComponent } from './shared/components/fairs-dashboard/fairs-dashboard.component';
import { AppRoutingModule } from './shared/app-routing.module';
import { RouterModule } from '@angular/router';
import { UserDetailsComponent } from './shared/components/user-details/user-details.component';
import { UserFormComponent } from './shared/components/user-form/user-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { GetConfirmComponent } from './shared/components/get-confirm/get-confirm.component';
import { BackBtnComponent } from './shared/components/back-btn/back-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersComponent,
    ProductDashboardComponent,
    HomeComponent,
    FairsDashboardComponent,
    UserDetailsComponent,
    UserFormComponent,
    GetConfirmComponent,
    BackBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
