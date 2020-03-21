import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Sighting } from 'src/app/user.model';
import { latLng, tileLayer } from 'leaflet';

@Component({
  selector: 'app-sightings',
  templateUrl: './sightings.component.html',
  styleUrls: ['./sightings.component.css']
})

export class SightingsComponent implements OnInit {
  sightings:Sighting [];

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      })
    ],
    zoom: 13,
    center: latLng([ 0.044071, 36.932078 ])
  };

  constructor() { }

  ngOnInit(){ 
    // return this.dataservice.getSightings()
    //   .subscribe(data => this.sightings = data)
  }
}