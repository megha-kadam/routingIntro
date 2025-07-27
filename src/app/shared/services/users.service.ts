import { Injectable } from "@angular/core";
import { Iuser } from "../models/user.interface";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn : 'root'
})
export class UserService{
    usersArr : Array<Iuser> = [ 
        {
            userName : "Jhon",
            userRole : "Candidate",
            userId : "123"
        },
         {
            userName : "June",
            userRole : "Admin",
            userId : "124"
        },
         {
            userName : "July",
            userRole : "Candidate",
            userId : "125"
        }
    ]

    fetchAllUser() : Observable<Iuser[]>{
        return of(this.usersArr);
        localStorage.setItem('users', JSON.stringify(this.usersArr));
    }

    fetchUserDetail(id : string) : Observable<Iuser>{
      let getUser = this.usersArr.find(user => user.userId === id) as Iuser
      return of(getUser);
    }

    createUser(user : Iuser){
        this.usersArr.push(user);
            localStorage.setItem('users', JSON.stringify(this.usersArr));
    }

    updateUsers(user : Iuser){
        let getIndex = this.usersArr.findIndex(u => u.userId === user.userId);
        this.usersArr[getIndex] = user
    }

    removeUser(user : Iuser){
        let getIndex = this.usersArr.findIndex(u => u.userId === user.userId);
        this.usersArr.splice(getIndex, 1);
            localStorage.setItem('users', JSON.stringify(this.usersArr));
    }
}


