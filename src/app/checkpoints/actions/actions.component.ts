import { marker } from '../../shared/marker';
import { CheckpointsService } from '../checkpoints.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {

  markers: marker[];
   
  constructor(cs: CheckpointsService) {
    this.markers = cs.getMarkers();
   }

  ngOnInit() {
  }

}
