import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CarService } from '../_services/car.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.component.html',
  styleUrls: ['./create-ad.component.css']
})
export class CreateAdComponent implements OnInit {

  constructor(private carServie : CarService,  private tokenStorageService: TokenStorageService) { }


  ngOnInit(): void {}

  public onAddCar(addForm: NgForm): void{

    document.getElementById('add-form-close')?.click();

    this.carServie.addCar(addForm.value).subscribe(
      (response: Car) => {

        console.log(response);
        addForm.reset();
       },
      (error: HttpErrorResponse) => {

        alert(error.message);
        addForm.reset();
      }
    );
  }

}
