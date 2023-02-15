import { Component, OnInit } from '@angular/core';
import { Population } from '../population';
import { PopulationService } from '../population.service';

@Component({
  selector: 'app-population-list',
  templateUrl: './population-list.component.html',
  styleUrls: ['./population-list.component.css']
})
export class PopulationListComponent implements OnInit{
  populations!: Population[];
  constructor(private populationService: PopulationService){}

  ngOnInit(): void {
      console.log(this.getPopulations());
  }

  private getPopulations(){ 
    this.populationService.getPopulationsList().subscribe(data=>{
      this.populations=data;
    })
  }

}
