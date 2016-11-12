import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Team Checkpointer';
  test: string = 'test';
  lat: number = 42.6852777;
  lng: number = 23.3192981;
  zoom: number = 18;
  //42.6852777,23.319298
}
