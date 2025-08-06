import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/users.service';
import { Iuser } from '../../models/user.interface';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersArr : Array<Iuser> = [];

  constructor(private _userService : UserService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this._userService.fetchAllUser()
    .subscribe({
      next : data => {
        this.usersArr = data
      },
      error : err => console.log('Something went wrong!!!')
    })
  }

 onNavigate(user : Iuser){
  this._router.navigate(['users', user.userId], {
    queryParams : {userRole : user.userRole}
  })
 }
}
