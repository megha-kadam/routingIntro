import { Component, OnInit } from '@angular/core';
import { FairService } from '../../services/fair.service';
import { Ifair } from '../../models/fair.interface';

@Component({
  selector: 'app-fairs-dashboard',
  templateUrl: './fairs-dashboard.component.html',
  styleUrls: ['./fairs-dashboard.component.scss']
})
export class FairsDashboardComponent implements OnInit {
  fairArr : Array<Ifair> = [];

  constructor(
        private _fairService : FairService
  ) { }

  ngOnInit(): void {
    this.getFairs()
  }

  getFairs(){
    this._fairService.fetchAllFair()
    .subscribe({
      next : data => this.fairArr = data,
      error : err => console.log("error")
      
    })
  }

}
