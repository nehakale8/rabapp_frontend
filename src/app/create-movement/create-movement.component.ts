import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovementsService } from '../movements.service';
import { Movements } from '../movements';

@Component({
  selector: 'app-create-movement',
  templateUrl: './create-movement.component.html',
  styleUrls: ['./create-movement.component.css']
})
export class CreateMovementComponent implements OnInit {

  movement: Movements = new Movements();
  constructor(private movementService: MovementsService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveMovement(){
    this.movementService.createMovement(this.movement).subscribe( data =>{
      console.log(data);
      this.goToMovementList();
    },
    error => console.log(error));
  }

  goToMovementList(){
    this.router.navigate(['/movements']);
  }
  
  onSubmit(){
    console.log(this.movement);
    this.saveMovement();
  }
}

