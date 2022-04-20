import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class FoodserviceService {
  fetchfooddata(){
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

  link = 'http://localhost:9090';

  public addservice(orderdata:any)
  {
    return this.http.post(this.link+'/insert',orderdata);
  }

  public updateservice(editdata:any)
  {
    return this.http.post(this.link+'/update',editdata);
  }

  public deleteservice(deletedata:any)
  {
    return this.http.post(this.link+'/delete',deletedata);
  }

  public fetchservice()
  {
    return this.http.get(this.link+'/fetch');
  }
}
