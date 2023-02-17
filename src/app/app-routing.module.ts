import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMovementComponent } from './create-movement/create-movement.component';
import { MovementsListComponent } from './movements-list/movements-list.component';
import { PopulationListComponent } from './population-list/population-list.component';
import { ShowMapComponent } from './show-map/show-map.component';

import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

const routes: Routes = [
  {path: "movements", component: MovementsListComponent},
  {path: "", redirectTo: "movements", pathMatch: "full"},
  {path: "create_movement", component: CreateMovementComponent},  
  {path: "population", component: PopulationListComponent},
  {path: "map", component: ShowMapComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
