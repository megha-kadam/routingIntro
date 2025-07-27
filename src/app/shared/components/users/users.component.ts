import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/users.service';
import { Iuser } from '../../models/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersArr : Array<Iuser> = [];

  constructor(private _userService : UserService) { }

  ngOnInit(): void {
    this._userService.fetchAllUser()
    .subscribe({
      next : data => {
        this.usersArr = data
      },
      error : err => console.log('Something went wrong!!!')
    })
  }

}
