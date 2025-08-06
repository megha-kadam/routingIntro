import { Injectable } from "@angular/core";
import { Iuser } from "../models/user.interface";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn : 'root'
})
export class UserService{
     usersArrs : Array<Iuser> = [
    {
        userName : "Will Smith",
        userRole : "Candidate",
        userId : '123'
    },
     {
        userName : "Tom Cruise",
        userRole : "Admin",
        userId : '124'
    },
        {
        userName : "June Doe",
        userRole : "Candidate",
        userId : '125'
    },
     {
        userName : "Emma Watson",
        userRole : "Super Admin",
        userId : '126'
    },
]

    fetchAllUser() : Observable<Iuser[]>{
        return of(this.usersArrs)
    }

    fetchUserDetail(id : string) : Observable<Iuser>{
      let getUser = this.usersArrs.find(user => user.userId === id) as Iuser
      return of(getUser);
    }

    createUser(user : Iuser){
        this.usersArrs.push(user);
    }

    updateUsers(user : Iuser){
        let getIndex = this.usersArrs.findIndex(u => u.userId === user.userId);
        this.usersArrs[getIndex] = user
    }

    removeUser(user : Iuser){
        let getIndex = this.usersArrs.findIndex(u => u.userId === user.userId);
        this.usersArrs.splice(getIndex, 1);
            
    }
}


