import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertComponent } from './_components';
import { HomeComponent } from './home';

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
    ShowMapComponent,
    AlertComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
