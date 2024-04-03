import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit  {
  sideBarOpen=true;
ngOnInit(){}
  sideBarToggler(){
    this.sideBarOpen=!this.sideBarOpen;
  }

}
