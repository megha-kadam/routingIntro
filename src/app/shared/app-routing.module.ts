import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { UsersComponent } from "./components/users/users.component";
import { ProductDashboardComponent } from "./components/product-dashboard/product-dashboard.component";
import { FairsDashboardComponent } from "./components/fairs-dashboard/fairs-dashboard.component";
import { UserDetailsComponent } from "./components/user-details/user-details.component";
import { UserFormComponent } from "./components/user-form/user-form.component";
import { ProductFormComponent } from "./components/product-form/product-form.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { FairsDetailComponent } from "./components/fairs-detail/fairs-detail.component";

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
        component : UsersComponent,
        children : [
            {
        path : 'addUser',
        component : UserFormComponent
    },
            {
        path : ':userId',
        component : UserDetailsComponent
    },
    {
        path : ':userId/edit',
        component : UserFormComponent
    },
        ]
    },
    //  {
    //     path : 'users/addUser',
    //     component : UserFormComponent
    // },
    // {
    //     path : 'users/:userId',
    //     component : UserDetailsComponent
    // },
    // {
    //     path : 'users/:userId/edit',
    //     component : UserFormComponent
    // },
     {
        path : 'products',
        component : ProductDashboardComponent,
        children : [
                {
        path : 'addProduct',
        component : ProductFormComponent
    },
    {
        path : ':pId',
        component : ProductDetailsComponent
    },
    {
        path : ':pId/edit',
        component : ProductFormComponent
    },
        ]
    }, 
    // {
    //     path : 'products/addProduct',
    //     component : ProductFormComponent
    // },
    // {
    //     path : 'products/:pId',
    //     component : ProductDetailsComponent
    // },
    // {
    //     path : 'products/:pId/edit',
    //     component : ProductFormComponent
    // },
    {
        path : 'fairs',
        component : FairsDashboardComponent,
        children : [
            {
        path : ':fairId',
        component : FairsDetailComponent
    },
        ]
    },
    // {
    //     path : 'fairs/:fairId',
    //     component : FairsDetailComponent
    // },
    {
        path : 'page-not-found',
        component : PageNotFoundComponent
    },
    {
        path : '**',
        redirectTo : 'page-not-found'
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