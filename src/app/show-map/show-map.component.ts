/// <reference path="../../../node_modules/@types/googlemaps/index.d.ts"/>
import { Component, OnInit } from '@angular/core';
import { PopulationService } from '@app/population.service';
import { Loader } from '@googlemaps/js-api-loader';
import { map } from 'rxjs';

// @ts-ignore
import { styles } from './mapStyles';

@Component({
  selector: 'app-show-map',
  templateUrl: './show-map.component.html',
  styleUrls: ['./show-map.component.css']
})

export class ShowMapComponent implements OnInit {

  title = 'google-maps';
  private map!: google.maps.Map
  constructor(private populationService: PopulationService){}
  markers = []  as  any;


  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyCImfh9gxzffjuzezu9zTmNGkuoxrdLTI8',
    });

    loader.load().then(() => {

      console.log('loaded gmaps')

      const location = { lat: 44, lng: -92, }
      const mak=[
        ['Bondi Beach', -33.890542, 151.274856, 4],
        ['Coogee Beach', -33.923036, 151.259052, 5],
        ['Cronulla Beach', -34.028249, 151.157507, 3],
        ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
        ['Maroubra Beach', -33.950198, 151.259302, 1]
      ];

      this.map = new google.maps.Map(document.getElementById("map")!, {
        center: location,
        zoom: 6,
        styles: styles
      })

      var infowindow = new google.maps.InfoWindow();
      var marker, i;

    this.populationService.getPopulationsList()
      .subscribe(data => {
          console.log(data)
          for (var dataE in data)  
          {
            marker = new google.maps.Marker({
              position: {
                lat: data[dataE].lat,
                lng: data[dataE].lon,
              },
              label: {
                color: 'black',
                text: data[dataE].name,
              },
              title: data[dataE].address,
              map: this.map
            });
            
            google.maps.event.addListener(marker, 'click', ((marker, dataE) => {
              return () => {
                var y=Number(dataE)+1
                infowindow.setContent("Farm ID "+y.toString());
                infowindow.open(this.map, marker);
              }
            })(marker, dataE));
          }
  })


    })
  }
  
}
