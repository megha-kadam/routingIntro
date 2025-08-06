import { Component, OnInit } from '@angular/core';
import { FairService } from '../../services/fair.service';
import { Ifair } from '../../models/fair.interface';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-fairs-detail',
  templateUrl: './fairs-detail.component.html',
  styleUrls: ['./fairs-detail.component.scss']
})
export class FairsDetailComponent implements OnInit {
  fairInfo !: Ifair;
  fairId !: string

  constructor(
    private _fairService : FairService,
    private _router : Router,
    private _route : ActivatedRoute
  ) { }

  getParam(){
    this._route.params
    .subscribe(param => {
      this.fairId = param['fairId'];

      if(this.fairId){
        this._fairService.fetchFairDetail(this.fairId)
        .subscribe({
          next : data => {
            this.fairInfo = data
          },
          error : err => console.log('error')
          
        })
      }
    })
  }

  ngOnInit(): void {
    this.getParam()
  }

}
