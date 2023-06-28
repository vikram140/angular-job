import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {
  id : any
  
  ngOnInit(): void {
    console.log("hello")
   this.id =  location.href.split("/job/")[1]

  }


title = 'zm-m';
    selectedTab = 0;

  tabChanged(index: number): void {
    this.selectedTab = index;
  }
  

  

}
