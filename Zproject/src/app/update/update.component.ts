import { Component, OnInit } from '@angular/core';
import { FoodserviceService } from '../foodservice.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private foodservice:FoodserviceService) 
  { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  update(updateForm:any)
  {
    this.foodservice.updateservice(updateForm.value).subscribe();
  }
}
