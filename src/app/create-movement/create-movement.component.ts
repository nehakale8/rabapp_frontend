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

    this.getPopulation(this.movement.origin_premise_id)
    console.log(this.population)
    console.log(this.movement)

    this.oid=this.population.total_animal_count-this.movement.moved_count;
    console.log(this.population)
    console.log(this.movement)
    
    this.population.total_animal_count=this.oid
    console.log(this.population)
    console.log(this.population.total_animal_count)
    console.log(this.oid)
    console.log(this.movement);
    this.populationService.updatePopulation(this.movement.origin_premise_id, this.population).subscribe(data=>{
      console.log(this.population);
    }, error=>console.log("on submt errror   "+error));


    this.getPopulation(this.movement.dest_premise_id)
    this.did=this.population.total_animal_count+this.movement.moved_count;
    this.population.total_animal_count=this.did  
    
    this.populationService.updatePopulation(this.movement.dest_premise_id, this.population).subscribe(data=>{
      this.goToMovementList();
      console.log(this.population);
    }, error=>console.log(error));

  }


  // private getPopulation(pid: String): Population{ 
  //   var x: Population=new Population();
  //   this.population=this.populationService.getPopulationByPid(pid).pipe(map( r => r))
  //   return x
  // }

  private getPopulation(pid: String){ 
    this.populationService.getPopulationByPid(pid).pipe(map(data=>{
      this.population=data;
      console.log(this.population);
      console.log(data);
    }))
  }


}

