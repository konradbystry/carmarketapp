import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../car';
import { CarService } from '../_services/car.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.css']
})
export class AdComponent implements OnInit {

  constructor(private carService : CarService,  private tokenStorageService: TokenStorageService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCar();
  }

  public car : Car|undefined;



  public getCar():void{
    this.carService.getCarById(this.activatedRoute.snapshot.params['id']).subscribe(
      (response:Car)=>{
        this.car = response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }


}
