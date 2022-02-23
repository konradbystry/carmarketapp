import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './../user';
import { Car } from './../car';
import { UserService } from '../_services/user.service';
import { CarService } from '../_services/car.service';
import { subscribeOn } from 'rxjs';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router } from '@angular/router';
import { WatchesService } from '../_services/watches.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public users: User[] | undefined;

  public cars!: Car[];

  constructor(private userService:UserService, private carService:CarService, private tokenStorageService: TokenStorageService, private router: Router, private watchesService : WatchesService){}

  ngOnInit(): void {
      // this.getUsers();
      this.getCars();
      this.access();
      this.currentUser = this.tokenStorageService.getUser();
  }

  private roles: string[] = [];

  showAdminBoard = false;
  isLoggedIn = false;
  username?: string;
  public watchCar: Car | undefined;
  currentUser: any;
  totalLength: any;
  page: number = 1;

  // public getUsers():void {
  //   this.userService.getUsers().subscribe(
  //     (response:User[]) =>{
  //       this.users=response;
  //     },
  //     (error:HttpErrorResponse)=>{
  //       alert(error.message);
  //     }
  //   )
  // }

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

  public access() :void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');


      this.username = user.username;
    }
  }

  public onDeleteCar(carId: number | undefined): void{
    this.carService.deleteCar(carId).subscribe(
      (response: void) => {
        console.log(response);
        this.getCars();
       },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public goToEdit(id : number) : void{
    this.router.navigate(['/edit', id]);
  }

  public goToAd(id : number) : void{
    this.router.navigate(['/ad', id]);
  }


  public addWatches(userId : number, carId : number | undefined): void{

    const watchesObj = {
      "user": {
        "id": userId
      },
      "car": {
        "id": carId
      }
    }

    console.log("here")
    this.watchesService.addWatches(watchesObj).subscribe(
      (response: Record<string, unknown>) => {
        console.log(response);
        alert("Added to waches")
       },
      (error: HttpErrorResponse) => {
        console.log("here2")
        alert(error.message);
      }
    );
  }

  public searchCar(key: string): void {
    console.log(key);
    const results: Car[] = [];
    for (const car of this.cars) {
      if (car.brand.toLowerCase().indexOf(key.toLowerCase()) !== -1
       ) {
        results.push(car);
      }
    }
    this.cars = results;
    if (results.length === 0 || !key) {
      this.getCars();
    }
  }


}
