import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { User } from '../user';
import { Watches } from '../watches';
import { CarService } from '../_services/car.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { WatchesService } from '../_services/watches.service';

@Component({
  selector: 'app-watches',
  templateUrl: './watches.component.html',
  styleUrls: ['./watches.component.css']
})
export class WatchesComponent implements OnInit {

  public cars : Car[]|undefined;
  public users : User[]|undefined;
  public watches : Watches[]|undefined;
  currentUser : any;





  constructor(private token: TokenStorageService, private watchesService : WatchesService, private carService: CarService) { }

  ngOnInit(): void {
    this.getWatches();
  }


  public getWatches(): void {
    this.currentUser = this.token.getUser();
    this.watchesService.getAllMyWatches(this.currentUser.id).subscribe(
      (response: Watches[]) => {
        this.watches = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public deleteWatches(watchesId: number | undefined): void{
    this.watchesService.deleteWatches(watchesId).subscribe(
      (response: void) => {
        console.log(response);
        this.getWatches();
       },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


}
