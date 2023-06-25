import { Component } from '@angular/core';
import {  } from '@angular/forms';



/** Error when invalid control is dirty, touched, or submitted. */


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  title = 'zm-m';
    selectedTab = 0;

  tabChanged(index: number): void {
    this.selectedTab = index;
  }

}
