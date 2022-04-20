import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbouttComponent } from './aboutt/aboutt.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DeleteComponent } from './delete/delete.component';
import { FetchComponent } from './fetch/fetch.component';
import { HomeComponent } from './home/home.component';
import { InsertComponent } from './insert/insert.component';
import { OrderfoodComponent } from './orderfood/orderfood.component';
import { SpecialityComponent } from './speciality/speciality.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: 'insert-component', component: InsertComponent},
  { path: 'update-component', component: UpdateComponent},
  { path: 'fetch-component', component: FetchComponent},
  { path: 'delete-component', component: DeleteComponent},
  { path: 'home-component', component: HomeComponent},
  { path: 'contactus-component', component: ContactusComponent},
  { path: 'orderfood-component', component: OrderfoodComponent},
  { path: 'speciality-component', component: SpecialityComponent},
  { path: 'aboutt-component', component: AbouttComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[InsertComponent,UpdateComponent,FetchComponent,DeleteComponent,HomeComponent,ContactusComponent,OrderfoodComponent,SpecialityComponent,AbouttComponent]
