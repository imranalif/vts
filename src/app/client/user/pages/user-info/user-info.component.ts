import { Component, OnInit,ViewChild } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';

import { Subscription } from 'rxjs';
import * as L from 'leaflet';
import 'leaflet-slidemenu';
import { DriverListComponent } from 'src/app/admin/driver/pages/driver-list/driver-list.component';
import { DeviceService } from 'src/app/admin/devices/services/device.service';


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  @ViewChild('myname') input; 
  map
  devices
  mediaSub: Subscription;
  deviceXs:boolean;
  constructor(private mediaObserver: MediaObserver,
    private deviceService: DeviceService) { }

  ngOnInit(): void {
this.getAllDevice();

    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result: MediaChange) => {
        // if(result.mqAlias=='xs'){
         
        // }
      this.deviceXs=result.mqAlias==='xs' ? true : false;
      }
    )


    this.map = L.map('mapid', {
      center: [23.73885035844803365, 90.39647340774536],
      zoom: 15,
      zoomControl: false
  });

  var openStreet=L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution : '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(this.map);


    // var openStreet= L.map('mapid',{zoomControl: false}).setView([23.73885035844803365, 90.39647340774536], 15);
    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   attribution:
    //     '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // })
   
   var googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
    center: [33.590241, 130.421222],
   maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});

//googleStreets.addTo(this.map);
openStreet.addTo(this.map);

var baseMaps={
  "OSM":openStreet,
  "Google Map":googleStreets
}

L.control.layers(baseMaps).addTo(this.map);

    var left  = '<h1>Slide Menu (Left)</h1>';
    var right = '<h1>Slide Menu (Right)</h1>';
    var contents = '<hr>';
    contents += `<table><thead> <tr><th></th><th></th><th></th></tr></thead>\n\
    <tbody>\n\
    <tr *ngFor="let a of devices">\n\
    <td><input (click)="check()" type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></td><td>{{a.name}}</td><td>good</td></tr></tbody></table> `;
    contents += '<button +(click)="check()+">Greet Me!</button>';
    contents += 'When you click the menu button and the menu is displayed to slide.<br>';
    contents += 'Please set the innerHTML to slide menu.</p>';
    contents += '<h3>Usage</h3>';
    contents += '<p>L.control.slideMenu("&lt;p&gt;test&lt;/p&gt;").addTo(map);</p>';
    contents += '<h3>Arguments</h3>';
    contents += '<p>L.control.slideMenu(&lt;String&gt;innerHTML, &lt;SlideMenu options&gt;options?)</p>';
    contents += '<a>Options tttttttttt</a>';
    var c='<app-driver-list></app-driver-list>'

var x = document.getElementById('r');
console.log(x)
    L.control.slideMenu(contents, {position: 'topleft', menuposition: 'topleft', width: '300px', height: '100%',direction: 'horizontal',  icon: 'fa-chevron-right'}).addTo(this.map);
   
    // right
    var slideMenu = L.control.slideMenu('', {position: 'bottomright', menuposition: 'bottomright', width: '100%', height: '170px',  icon: 'fa-chevron-left'}).addTo(this.map);
    slideMenu.setContents(c);
  }
  
  getAllDevice(): void {
    this.deviceService.getAllDevices().subscribe(res => {
      this.devices = res;
    });
  }
check(){
console.log("gfhfghfh");
}

  logout(){}

}
