import { Component, Input, OnInit } from '@angular/core';
import { Ifair } from '../../models/fair.interface';
import { FairService } from '../../services/fair.service';

@Component({
  selector: 'app-fair-card',
  templateUrl: './fair-card.component.html',
  styleUrls: ['./fair-card.component.scss']
})
export class FairCardComponent implements OnInit {
  @Input() fairObj !: Ifair;

  constructor(
    private _fairService : FairService
  ) { }

  ngOnInit(): void {
  }



}
