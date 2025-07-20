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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersComponent,
    ProductDashboardComponent,
    HomeComponent,
    FairsDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
