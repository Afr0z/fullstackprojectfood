import { Component, OnInit } from '@angular/core';
import { FoodserviceService } from '../foodservice.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  constructor(private foodservice:FoodserviceService) { }

  ngOnInit(): void {
  }

  insertdata(insertForm:any)
  {
    this.foodservice.addservice(insertForm.value).subscribe();
  }
}
