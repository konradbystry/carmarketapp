import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { Car } from './car';
import { UserService } from './user.service';
import { CarService } from './car.service';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public users: User[] | undefined;

  public cars: Car[] | undefined;

  constructor(private userService:UserService, private carService:CarService){}

  ngOnInit(): void {
      this.getUsers();
      this.getCars();
  }

  public getUsers():void {
    this.userService.getUsers().subscribe(
      (response:User[]) =>{
        this.users=response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }

  public getCars():void {
    this.carService.getCars().subscribe(
      (response:Car[]) =>{
        this.cars=response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }


}
