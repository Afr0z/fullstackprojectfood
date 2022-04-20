import { Component, OnInit } from '@angular/core';
import { FoodserviceService } from '../foodservice.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private foodservice:FoodserviceService) { }

  ngOnInit(): void {
  }
  deletedata(deleteForm:any)
  {
    this.foodservice.deleteservice(deleteForm.value).subscribe();
  }
}
