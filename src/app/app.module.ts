import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovementsListComponent } from './movements-list/movements-list.component';
import { CreateMovementComponent } from './create-movement/create-movement.component';
import { FormsModule } from '@angular/forms';
import { PopulationListComponent } from './population-list/population-list.component';
import { ShowMapComponent } from './show-map/show-map.component';

@NgModule({
  declarations: [
    AppComponent,
    MovementsListComponent,
    CreateMovementComponent,
    PopulationListComponent,
    ShowMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
