import { ucs2 } from 'punycode';
import { CheckpointsService } from './checkpoints.service';
import { marker } from '../shared/marker';
import { MouseEvent, SebmGoogleMapCircle } from 'angular2-google-maps/esm/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkpoints',
  templateUrl: './checkpoints.component.html',
  styleUrls: ['./checkpoints.component.scss']
})
export class CheckpointsComponent implements OnInit {

  markers: marker[];
  zoom: number = 8;

  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;

  clickedMarker(label: string, index: number) {
    this.markers.splice(index,1);
    console.log(`removed ${index}`);
  }

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      label: 'wtf',
      draggable: true
    });
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  


  constructor(cs: CheckpointsService) { 
    this.markers = cs.getMarkers();
  }

  ngOnInit() {
  }

}
