import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMovementComponent } from './create-movement/create-movement.component';
import { MovementsListComponent } from './movements-list/movements-list.component';
import { PopulationListComponent } from './population-list/population-list.component';

const routes: Routes = [
  {path: "movements", component: MovementsListComponent},
  {path: "", redirectTo: "movements", pathMatch: "full"},
  {path: "create_movement", component: CreateMovementComponent},  
  {path: "population", component: PopulationListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
