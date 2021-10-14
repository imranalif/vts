import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userData
  constructor() { 
    this.userData = JSON.parse(localStorage.getItem('userData'));
  }

  ngOnInit(): void {
  }

}
