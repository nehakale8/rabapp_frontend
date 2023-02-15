import { Component, OnInit } from '@angular/core';
import { Movements } from '../movements';
import { MovementsService } from '../movements.service';

@Component({
  selector: 'app-movements-list',
  templateUrl: './movements-list.component.html',
  styleUrls: ['./movements-list.component.css']
})
export class MovementsListComponent implements OnInit{

  movements!: Movements[];
  constructor(private movementsService: MovementsService){}

  ngOnInit(): void {
      console.log(this.getMovements());
  }

  private getMovements(){ 
    this.movementsService.getMovementsList().subscribe(data=>{
      this.movements=data;
    })
  }

}
