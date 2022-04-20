import { Component, OnInit } from '@angular/core';
import { FoodserviceService } from '../foodservice.service';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent implements OnInit 
{
  fooddetails:any;

  constructor(private foodservice:FoodserviceService) { this.fetchdata(); }

  ngOnInit(): void {
  }
  fetchdata()
  {
    this.foodservice.fetchservice().subscribe(
      (resp:any) => { this.fooddetails=resp; }
    );
  }
}
