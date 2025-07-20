import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { UsersComponent } from "./components/users/users.component";
import { ProductDashboardComponent } from "./components/product-dashboard/product-dashboard.component";
import { FairsDashboardComponent } from "./components/fairs-dashboard/fairs-dashboard.component";

const routes : Routes = [
    {
        path : '',
        component : HomeComponent
    },
    {
        path : 'home',
        component : HomeComponent
    },
    {
        path : 'users',
        component : UsersComponent
    },
     {
        path : 'products',
        component : ProductDashboardComponent
    }, {
        path : 'fairs',
        component : FairsDashboardComponent
    }
]

@NgModule({
    imports : [
       RouterModule.forRoot(routes)
    ],
    exports : [

    ]
})
export class AppRoutingModule{
  
}