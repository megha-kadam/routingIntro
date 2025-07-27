import { Component, OnInit } from '@angular/core';
import { Iuser } from '../../models/user.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UuidService } from '../../services/uuid.service';
import { UserService } from '../../services/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  isInEditMode : boolean = false;
  userId !: string;
  editUser !: Iuser;

  constructor(
    private _activatedRoute : ActivatedRoute,
    private _uuidService : UuidService,
    private _route : Router,
    private _userService : UserService
  ) { }

  userForm !: FormGroup;

  onAddUser(){
    if(this.userForm.valid){
      let userObj = this.userForm.value;
      console.log(userObj);
      
      userObj.userId = this._uuidService.generateUuid();

      this._userService.createUser(userObj);
      this._route.navigate(['users'])
      this.userForm.reset();
    }
  }

  ngOnInit(): void {
    this.createUserForm()
   this.getUserParams();
  }

  createUserForm(){
    this.userForm = new FormGroup({
      userName : new FormControl(null, [Validators.required]),
      userRole : new FormControl(null, [Validators.required])
    })
  }

   onUpdateUser(){
   if(this.userForm.valid){
    let updateObj = {
      ...this.userForm.value, 
      userId : this.userId
    };
   console.log(updateObj);
   this._userService.updateUsers(updateObj);
   this.userForm.reset();
   this._route.navigate(['users'])
   }
    
  }


  getUserParams(){
     this.userId = this._activatedRoute.snapshot.params['userId'];
    if(this.userId){
      this.isInEditMode= true;

      this._userService.fetchUserDetail(this.userId)
      .subscribe({
        next : data => {
          this.editUser = data;
          this.userForm.patchValue(this.editUser);
          //this._route.navigate(['users']);
        },
        error : err => console.log('Something went wrong!!!')
        
      })
    }
  }
}
