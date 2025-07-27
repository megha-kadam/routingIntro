import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { UsersComponent } from "./components/users/users.component";
import { ProductDashboardComponent } from "./components/product-dashboard/product-dashboard.component";
import { FairsDashboardComponent } from "./components/fairs-dashboard/fairs-dashboard.component";
import { UserDetailsComponent } from "./components/user-details/user-details.component";
import { UserFormComponent } from "./components/user-form/user-form.component";

const routes : Routes = [
    {
        path : '',
        // component : HomeComponent,
        redirectTo : 'home',
        pathMatch : 'full'
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
        path : 'users/addUser',
        component : UserFormComponent
    },
    {
        path : 'users/:userId',
        component : UserDetailsComponent
    },
    {
        path : 'users/:userId/edit',
        component : UserFormComponent
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