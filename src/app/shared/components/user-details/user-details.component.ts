import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserService } from '../../services/users.service';
import { Iuser } from '../../models/user.interface';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';
import { SnackBarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  userId !: string;
  userInfo !: Iuser;

  constructor(private _routes : ActivatedRoute,
            private _userService : UserService,
            private _matDialog : MatDialog,
            private _snackbar : SnackBarService,
            private _routeNavigate : Router
  ) { }

  ngOnInit(): void {
   this.getUser();
  }


  getUser(){
    this.userId = this._routes.snapshot.params['userId'];
    if(this.userId){
      this._userService.fetchUserDetail(this.userId)
      .subscribe({
        next : data => this.userInfo = data,
        error : err => console.log("something went wrong!!")
      })
    }
  }

  onRemoveUser(user : Iuser){
    let matConfig = new MatDialogConfig();
    matConfig.data = `Are you sure, you want to remove ${user.userName}`;
    matConfig.width = "400px";

    let matdialog = this._matDialog.open(GetConfirmComponent, matConfig);
    matdialog.afterClosed()
    .subscribe(res => {
      if(res){
        this._userService.removeUser(user);
        this._routeNavigate.navigate([user])
        this._snackbar.openSnackBar(`User ${user.userName} removed successfully!!!`)
      }
    })
  }

}
