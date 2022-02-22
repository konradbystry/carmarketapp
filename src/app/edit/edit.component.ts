
import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CarService } from '../_services/car.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private carService : CarService,  private tokenStorageService: TokenStorageService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCar();
    console.log(this.activatedRoute.snapshot.params['id'])
  }
  public cars!: Car[] ;
  public editCar : Car|undefined;
  carr = {}
  foo : string|undefined;

  public onEditCar(car: Car): void{

    this.carService.updateCar(this.activatedRoute.snapshot.params['id'], car).subscribe(
      (response: Car) => {

        this.carService.getCars();
       },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getCar():void{
    this.carService.getCarById(this.activatedRoute.snapshot.params['id']).subscribe(
      (response:Car)=>{
        this.editCar = response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }

}
