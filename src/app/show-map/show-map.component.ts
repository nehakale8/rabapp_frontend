/// <reference path="../../../node_modules/@types/googlemaps/index.d.ts"/>
import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyCImfh9gxzffjuzezu9zTmNGkuoxrdLTI8',
    });

    loader.load().then(() => {

      console.log('loaded gmaps')

      const location = { lat: 51.233334, lng: 	6.783333 }
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
    
    // for (i = 0; i < mak.length; i++) {  
    //   marker = new google.maps.Marker({
    //     position: new google.maps.LatLng(mak[i][1], mak[i][2]),
    //     map: this.map
    //   });
      
    //   google.maps.event.addListener(marker, 'click', ((marker, i) => {
    //     return () => {
    //       infowindow.setContent(mak[i][0]);
    //       infowindow.open(this.map, marker);
    //     }
    //   })(marker, i));
    // }


    })
  }
}
