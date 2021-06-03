import { Component, OnInit,ViewChild } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
// /var/projects/angular/VTSApp/angular/node_modules/leaflet-slidemenu/src/L.Control.SlideMenu.js


import { Subscription } from 'rxjs';
import * as L from 'leaflet';
import 'leaflet-slidemenu';
import '/var/projects/angular/VTSApp/angular/node_modules/leaflet-slidemenu/src/L.Control.SlideMenu.js'
import { DriverListComponent } from 'src/app/admin/driver/pages/driver-list/driver-list.component';
import { DeviceService } from 'src/app/admin/devices/services/device.service';


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})



export class UserInfoComponent implements OnInit {
  html
  @ViewChild('myname') input; 
  map
  devices
  mediaSub: Subscription;
  deviceXs:boolean;
  fruits = ["apple", "orange", "cherry"];
  constructor(private mediaObserver: MediaObserver,
    private deviceService: DeviceService) {
      this.getAllDevice();
     }

     ngAfterViewInit(): void {
      setTimeout(function () {
        var leftbar = document.getElementsByClassName("left_bar");
        var myFunction = function(e) {
          var name = this.getAttribute("data-name");
          if(e.target.checked) {
            console.log(name, "Checked");
          } else {
            console.log(name, "Unchecked");
          }
        };
        console.log("AAAAAAAAA");
        for (var i = 0; i < leftbar.length; i++) {
          console.log("XXXXXXXXX");
          leftbar[i].addEventListener('click', myFunction, false);
        }
        console.log("BBBBBBBBBBB");
      }, 500);
  }

  ngOnInit(): void {   
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
    contents += `<table><thead> <tr><th></th><th></th><th></th></tr></thead>\
    <tbody>\n\;
    
    <tr *ngFor="let a of devices">\n\
    <td>
    <input (click)="check()" type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
    </td>
    <td>{{a.name}}</td><td>good</td></tr></tbody></table> `;
    contents += '<button (click)="check()">Greet Me!</button>';
    contents += 'When you click the menu button and the menu is displayed to slide.<br>';
    contents += 'Please set the innerHTML to slide menu.</p>';
    contents += '<h3>Usage</h3>';
    contents += '<p>L.control.slideMenu("&lt;p&gt;test&lt;/p&gt;").addTo(map);</p>';
    contents += '<h3>Arguments</h3>';
    contents += '<p>L.control.slideMenu(&lt;String&gt;innerHTML, &lt;SlideMenu options&gt;options?)</p>';
    contents += '<a (click)="ch()">Options tttttttttt</a>';
    var c='<app-driver-list></app-driver-list>'

    this.html = '<table id="table" class="table table-striped">';
    this.html += '<tr>';
var flag = 0;
if(this.devices){
  console.log(this.devices)
  this.devices.forEach(element => {
    this.html += '<th>' + element.name + '</th>';
  });
}
// this.fruits.forEach(element => {
//   html += '<th>' + element + '</th>';
// });
// this.html += '</tr>';
// this.devices.forEach((index, value)=> {
//     this.html += '<tr>';
//     value.forEach((index2, value2)=> {
//         this.html += '<td>' + value2 + '</td>';
//     });
//     this.html += '<tr>';
// });
// this.html += '</table>';


    // L.control.slideMenu(this.html, {position: 'topleft', menuposition: 'topleft', width: '25%', height: '100%',direction: 'horizontal',  icon: 'fa-chevron-right'}).addTo(this.map);
   
    // right
    var slideMenu = L.control.slideMenu('<app-driver-list></app-driver-list>', {position: 'bottomright', menuposition: 'bottomright', width: '75%', height: '170px',  icon: 'fa-chevron-left'}).addTo(this.map);
    slideMenu.setContents(c);
    console.log("test")
    console.log(L.control.slideMenu)
    console.log("test end")
  }
  
  kcheckt(){
    // var txt = document.getElementById("txtWord");
    // alert(txt);
    console.log("txt");
    }

   kcheck() {
      console.log("fdfdgdfg")
     }

  getAllDevice(): void {
    this.deviceService.getAllDevices().subscribe(res => {
      this.devices = res;
      console.log(this.devices)
      
    
      this.html = '<table id="table" class="table table-striped">';
      this.html += '<input type="text" id="vehicle1" name="vehicle1" value="Billlu">';
      this.html += '<button type="button" id="btn" onclick="m()">Click Me!</button>'
      this.html += '<tr>';
    
  var flag = 0;
  function m() {
  console.log("fdfdgdfg")
 }
  // btn.addEventListener("click", function() {
  //   console.log("fdfdgdfg")
  // }, false)

 

  if(this.devices){
    console.log(this.devices)
    // this.devices.forEach(element => {
    //   this.html += '<th>' + element.name + '</th>';
    // });
    this.html += '</tr>';
this.devices.forEach((element, ind)=> {

    this.html += '<tr>';
    this.html += '<td>    <input data-name="'+element.name+'" type="checkbox" class="left_bar" name="vehicle1" value="Bike" /></td>';
        this.html += '<td>' + element.name + '</td>';
        this.html += '<td>' + element.unique_id + '</td>';
 
    this.html += '<tr>';
});
this.html += '</table>';
  }
  // this.fruits.forEach(element => {
  //   html += '<th>' + element + '</th>';
  // });
  this.html += '</tr>';
  // $.each(markers, function (index, value) {
  //     html += '<tr>';
  //     $.each(value, function (index2, value2) {
  //         html += '<td>' + value2 + '</td>';
  //     });
  //     html += '<tr>';
  // });
  this.html += '</table>';
  this.html += '<button type="button" (click)="check()">Click Me!</button>'
      L.control.slideMenu(this.html, {position: 'topleft', menuposition: 'topleft', width: '25%', height: '100%',direction: 'horizontal',  icon: 'fa-chevron-right'}).addTo(this.map);
    });
  }
 
  check(event){
    // var txt = document.getElementById("txtWord");
    // alert(txt);
    console.log("txt");
    }

  logout(){}

  

}
