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
import { ProductDetailsComponent } from './shared/components/product-details/product-details.component';
import { ProductFormComponent } from './shared/components/product-form/product-form.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { FairsDetailComponent } from './shared/components/fairs-detail/fairs-detail.component';
import { FairCardComponent } from './shared/components/fair-card/fair-card.component';

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
    BackBtnComponent,
    ProductDetailsComponent,
    ProductFormComponent,
    PageNotFoundComponent,
    FairsDetailComponent,
    FairCardComponent
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
