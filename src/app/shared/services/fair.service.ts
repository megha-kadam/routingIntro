import { Observable, of } from "rxjs";
import { fairs } from "../const/fair";
import { Ifair } from "../models/fair.interface";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn : 'root'
})
export class FairService{
    fairsArr : Array<Ifair> = fairs;


    fetchAllFair() : Observable<Ifair[]>{
        return of(this.fairsArr)
    }

    fetchFairDetail(id : string) : Observable<Ifair> {
        let findFair = this.fairsArr.find(fair => fair.fairId === id) as Ifair

        return of(findFair);
    }
}