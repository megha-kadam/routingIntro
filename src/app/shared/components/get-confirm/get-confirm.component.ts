import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-get-confirm',
  templateUrl: './get-confirm.component.html',
  styleUrls: ['./get-confirm.component.scss']
})
export class GetConfirmComponent implements OnInit {
  msg !: string

  constructor(private _matdialog : MatDialogRef<GetConfirmComponent>,
            //  @Inject(MAT_DIALOG_DATA) 
  ) { }

  onClose(flag : boolean){
    this._matdialog.close(flag)
  }

  ngOnInit(): void {
  }


}
