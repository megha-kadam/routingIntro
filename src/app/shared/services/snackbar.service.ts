import { Injectable } from "@angular/core";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";

@Injectable({
    providedIn : 'root'
})
export class SnackBarService{
    constructor(private _matsnack : MatSnackBar){}

    private readonly matconfig : MatSnackBarConfig = {
        duration : 3000,
        horizontalPosition : 'left',
        verticalPosition : 'top'
    }

    openSnackBar(msg : string){
        this._matsnack.open(msg, "Close", this.matconfig)
    }
}