import { marker } from '../shared/marker';
import { Injectable } from '@angular/core';

@Injectable()
export class CheckpointsService {
    private markers: marker[] = [
        {
            lat: 51.673858,
            lng: 7.815982,
            label: 'A',
            draggable: true
        },
        {
            lat: 51.373858,
            lng: 7.215982,
            label: 'B',
            draggable: false
        },
        {
            lat: 51.723858,
            lng: 7.895982,
            label: 'C',
            draggable: true
        }
    ];



    getMarkers(): marker[] {
        return this.markers;
    }
    constructor() { }
}