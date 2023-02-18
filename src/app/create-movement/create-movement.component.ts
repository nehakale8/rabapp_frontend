import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovementsService } from '../movements.service';
import { Movements } from '../movements';
import { Population } from '../population';
import { PopulationService } from '../population.service';
import { map } from 'rxjs/internal/operators/map';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-movement',
  templateUrl: './create-movement.component.html',
  styleUrls: ['./create-movement.component.css']
})
export class CreateMovementComponent implements OnInit {

  oid!: number;
  did!: number;
  population: Population=new Population();
  
  movement: Movements = new Movements();
  constructor(private movementService: MovementsService, private populationService: PopulationService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  saveMovement(){
    this.movementService.createMovement(this.movement).subscribe( data =>{
      console.log(data);
    },
    error => console.log("save movement error   "+error));
  }

  goToMovementList(){
    this.router.navigate(['/movements']);
  }
  
  onSubmit(){

    console.log(this.movement);
    this.saveMovement();
    this.goToMovementList();
  }

}

