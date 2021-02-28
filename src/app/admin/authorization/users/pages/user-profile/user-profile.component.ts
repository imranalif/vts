import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
userData
  constructor() { 
    this.userData = JSON.parse(localStorage.getItem('userData'));
  }

  ngOnInit(): void {
  }

}
