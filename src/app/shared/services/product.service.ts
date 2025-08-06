import { Injectable } from "@angular/core";
import { Iproduct } from "../models/product.interface";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn : 'root'
})
export class ProductService{
    productsArr : Array<Iproduct> = [
        {
            productName : "Samsung",
            canReturn : 0,
            pId : '123',
            pStatus : 'In-progress',
            image : 'https://tse1.mm.bing.net/th/id/OIP.dmi53_TDR4tz_m_4_PHilAHaE7?pid=Api&P=0&h=180',
            price : 20000,
            productDetails : 'Samsung Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sequi perferendis blanditiis inventore similique neque animi veniam ipsum suscipit ullam eius ipsam minus ducimus quam, facilis eum praesentium.'
        },
         {
            productName : "HP",
            canReturn : 1,
            pId : '124',
            pStatus : 'Dispatch',
            image : 'https://tse2.mm.bing.net/th/id/OIP.8dONY82usxXQzZHJ_OgwfQHaFR?pid=Api&P=0&h=180',
            price : 60000,
            productDetails : 'HP Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sequi perferendis blanditiis inventore similique neque animi veniam ipsum suscipit ullam eius ipsam minus ducimus quam, facilis eum praesentium.'
        },
         {
            productName : "Acer",
            canReturn : 0,
            pId : "125",
            pStatus : "Delivered",
            image : 'https://i5.walmartimages.com/asr/9ca32366-d7e4-4a76-93bd-b47674b79410.7905efb715346b197489bebc21504e42.jpeg',
            price : 40000,
            productDetails : 'Acer Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sequi perferendis blanditiis inventore similique neque animi veniam ipsum suscipit ullam eius ipsam minus ducimus quam, facilis eum praesentium.'
        },
         {
            productName : "Iphone",
            canReturn : 1,
            pId : '126',
            pStatus : 'In-progress',
            image : 'https://tse2.mm.bing.net/th/id/OIP.OFqGhDKcTgG-GLaLyWR3BwHaFN?pid=Api&P=0&h=180',
            price : 55000,
            productDetails : 'Iphone Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sequi perferendis blanditiis inventore similique neque animi veniam ipsum suscipit ullam eius ipsam minus ducimus quam, facilis eum praesentium.'
        }
    ]

    fetchAllProducts() : Observable<Iproduct[]>{
        return of(this.productsArr)
    }

    fetchProduct(id : string) : Observable<Iproduct>{
        let getProduct = this.productsArr.find(p => p.pId === id) as Iproduct
        return of(getProduct)
    }

    updateProduct(product : Iproduct){
        let getIndex = this.productsArr.findIndex(p => p.pId === product.pId);
        this.productsArr[getIndex] = product
    }

    createProduct(product : Iproduct){
        this.productsArr.push(product)
    }

    removeProduct(product : Iproduct){
        let getIndex = this.productsArr.findIndex(p => p.pId === product.pId);
        this.productsArr.splice(getIndex, 1)
    }
}





