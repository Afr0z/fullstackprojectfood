import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsertComponent } from './insert/insert.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { FetchComponent } from './fetch/fetch.component';
import { HomeComponent } from './home/home.component';
import { OrderfoodComponent } from './orderfood/orderfood.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SpecialityComponent } from './speciality/speciality.component';
import { AbouttComponent } from './aboutt/aboutt.component';
@NgModule({
  declarations: [
    AppComponent,
    InsertComponent,
    UpdateComponent,
    DeleteComponent,
    FetchComponent,
    HomeComponent,
    OrderfoodComponent,
    ContactusComponent,
    SpecialityComponent,
    AbouttComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

