import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Iproduct } from '../../models/product.interface';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {
  productArr : Array<Iproduct> = [];

  constructor(
        private _productService : ProductService,
        private _router : Router
  ) { }

  onNavigate(product : Iproduct){
    this._router.navigate(['products', product.pId], {
      queryParams : {canEdit : product.canReturn}
    })
  }

getProducts(){
  this._productService.fetchAllProducts()
  .subscribe({
    next : data => {
      this.productArr = data
      console.log(this.productArr);
      
    },
    error : err => console.log('Something went wrong!!!')
    
  })
}

  ngOnInit(): void {
    this.getProducts()
  }

}
