import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Iproduct } from '../../models/product.interface';
import { ProductService } from '../../services/product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UuidService } from '../../services/uuid.service';
import { SnackBarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  isInEditMode : boolean = false;
  productId !: string;
  productObj !: Iproduct;
  productForm !: FormGroup;
  canEditVal !: string;
  updateBtnFlag : boolean = false;

  constructor(
        private _routes : ActivatedRoute,
        private _product : ProductService,
        private uuidService : UuidService,
        private _snackbar  : SnackBarService,
        private _router : Router
  ) { }

  ngOnInit(): void {
    this.createForm();
  this.getParams();
    
  this._routes.queryParams
  .subscribe((param : Params) => {
    console.log(param);
    this.canEditVal = param['canEdit'];
    console.log(this.canEditVal);
    

    if(this.canEditVal && this.canEditVal === "0"){
      this.productForm.disable();
      this.updateBtnFlag = true
    }
  })
  }

  createForm(){
    this.productForm = new FormGroup({
      productName : new FormControl(null, [Validators.required]),
      image : new FormControl(null, [Validators.required]),
      price : new FormControl(null, [Validators.required]),
      productDetails : new FormControl(null, [Validators.required]),
      pStatus : new FormControl(null, [Validators.required]),
      canReturn : new FormControl(null, [Validators.required]),
    })
  }

  get f(){
    return this.productForm.controls;
  }

  onProductAdd(){
    //console.log(this.productForm.value);
    if(this.productForm.valid){
      let newObj = this.productForm.value;
    newObj.pId = this.uuidService.generateUuid();

    this._product.createProduct(newObj);
    this.productForm.reset();
    this._router.navigate(['products']);
    this._snackbar.openSnackBar(`New product ${newObj.productName} added successfully!!!`)
    }
  }

  onUpdateProduct(){
    if(this.isInEditMode){
      // console.log('updated');
      if(this.productForm.valid){
        let updateObj = this.productForm.value;
        
        this._product.updateProduct(updateObj);
        this._snackbar.openSnackBar(`Product ${updateObj.productName} updated successfully!!`);
        this._router.navigate(['products'])
      }
    }
  }

  getParams(){
    // this._routes.params
    // .subscribe(param => {
    //   this.productId = param['pId']
    // })

    this.productId = this._routes.snapshot.params['pId'];
    if(this.productId){
      this.isInEditMode = true;

      this._product.fetchProduct(this.productId)
      .subscribe(
        {
          next : data => {
            this.productObj = data;
            this.productForm.patchValue(this.productObj);
          },
          error : err => console.log("err")
          
        }
      )
    }
  }

}
