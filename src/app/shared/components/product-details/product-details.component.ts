import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../models/product.interface';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';
import { SnackBarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productInfo !: Iproduct;
  productId !: string;

  constructor(
          private _productService : ProductService,
          private _route : ActivatedRoute,
          private _matDialog : MatDialog,
          private _snackbar : SnackBarService,
          private _router : Router
  ) { }

  onNavigate(){
    // this._router.navigate(['products', this.productId ,'edit']);
    this._router.navigate(['edit'], {
      relativeTo : this._route,
      queryParamsHandling : 'preserve'
    })
  }

  getParams(){
    this.productId = this._route.snapshot.params['pId'];
    console.log(this.productId);
    

    if(this.productId){
      this._productService.fetchProduct(this.productId)
      .subscribe({
        next : data => {
          this.productInfo = data
          console.log(data);
          
        },
        error : err => console.log("Something went wrong!!")
        
      })
    }
  }

  onRemoveProduct(product : Iproduct){
    let matConfig : MatDialogConfig = new MatDialogConfig();
    matConfig.data = `Are you sure, you want to remove this ${product.productName}`;
    matConfig.width = '400px';

    let matDialog = this._matDialog.open(GetConfirmComponent, matConfig);
    matDialog.afterClosed()
    .subscribe(res => {
      if(res){
        this._productService.removeProduct(product);
        this._snackbar.openSnackBar(`Product ${product.productName} removed successfully!!`);
        this._router.navigate(['products'])
      }
    })
  }

  ngOnInit(): void {
    this.getParams()
  }

}
