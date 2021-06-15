import { Component, OnInit, ViewChild, ElementRef,Inject } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
// /var/projects/angular/VTSApp/angular/node_modules/leaflet-slidemenu/src/L.Control.SlideMenu.js

import { DOCUMENT } from '@angular/common';
import { Subscription } from 'rxjs';
import * as L from 'leaflet';
import 'leaflet-slidemenu';
import 'leaflet-sidebar';
import 'leaflet-arrowheads'
import '/var/projects/angular/VTSApp/angular/node_modules/leaflet-slidemenu/src/L.Control.SlideMenu.js'
import { DriverListComponent } from 'src/app/admin/driver/pages/driver-list/driver-list.component';
import { DeviceService } from 'src/app/admin/devices/services/device.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SlideMenuComponent } from '../slide-menu/slide-menu.component';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})



export class UserInfoComponent implements OnInit {
  timeArray=[]
  overlayMaps
  baseMaps
  n
  a
  myIcon
  myIcon2
  cities
  positions

  route
  engine
  engineArray=[]
  arrow
  park
  parkArray=[]
  parking
history

  marker=[]
  markerArray=[]
  k = []
  checkData
  dat
  bottomHtml
  html
  val
  @ViewChild('sidebar') dal: ElementRef;
  @ViewChild('myname') input;
  @ViewChild('appDrawer', { static: true }) appDrawer: ElementRef;
  opened = true;
  sideMode="over"
  dataSource = new MatTableDataSource<any>([]);
  map
  devices = []
  mediaSub: Subscription;
  deviceXs: boolean;
  fruits = ["apple", "orange", "cherry"];
  constructor(private mediaObserver: MediaObserver,
    private deviceService: DeviceService,
    private dialog: MatDialog,
   ) {
    this.getAllDevice();
    
  }


  

  ngOnInit(): void {
    

    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result: MediaChange) => {
        // if(result.mqAlias=='xs'){
        // }
        this.deviceXs = result.mqAlias === 'xs' ? true : false;
      }
    )

    this.myIcon = L.icon({
      iconUrl: './assets/client/images/mm.png',
      iconSize: [20, 40],
      iconAnchor: [12, 39],
      color: 'blue',
      className: 'icon'
  
    });

    this.myIcon2 = L.icon({
      iconUrl: './assets/client/images/nn.png',
      iconSize: [20, 40],
      iconAnchor: [12, 39],
      color: 'blue',
      className: 'icon'
  
    });

    this.map = L.map('mapid', {
      center: [23.73885035844803365, 90.39647340774536],
      zoom: 15,
      zoomControl: false
    });

    var openStreet = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    this.map.on('click', function(e) {
      alert("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng)
  });


    // var openStreet= L.map('mapid',{zoomControl: false}).setView([23.73885035844803365, 90.39647340774536], 15);
    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   attribution:
    //     '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // })

    var googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      center: [33.590241, 130.421222],
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    });

    //googleStreets.addTo(this.map);
    openStreet.addTo(this.map);

    this.baseMaps = {
      "OSM": openStreet,
      "Google Map": googleStreets
    }

    //L.control.layers(baseMaps,this.overlayMaps).addTo(this.map);


  //   var sidebar = L.control.sidebar('sidebar', {
  //     position: 'left'
  // });
  // this.map.addControl(sidebar);
  // sidebar.toggle();

    var c = '<app-driver-list></app-driver-list>'

    this.html = '<table id="table" class="table-content">';
    this.html += '<tr>';
    var flag = 0;
    if (this.devices) {
      console.log(this.devices)
      this.devices.forEach(element => {
        this.html += '<th>' + element.name + '</th>';
      });
    }
    this.getAllPosition();
  }


  getAllPosition(){
    var polyline = L.polyline([]).addTo(this.map);
    this.deviceService.getAllPostion().subscribe(res => {
      this.positions=res;
      this.positions.forEach((element,i) => {
        if(element.power=='off'){
          this.engine= L.marker([element.latitude, element.longitude],{icon:this.myIcon}).bindTooltip(element.latitude);
          this.engineArray.push(this.engine)
          this.history = L.layerGroup(this.engineArray);
        }
        this.timeArray.push(element.timestamp)
        var time=this.timeArray[i]-this.timeArray[i-1]
        if(time>10){
          console.log("=====")
          this.park=this.marker=L.marker([element.latitude, element.longitude],{icon:this.myIcon2}).bindTooltip(element.latitude);
          this.parkArray.push(this.park)
          this.parking = L.layerGroup(this.parkArray);
        }
        console.log(time);
         this.route=polyline.addLatLng(L.latLng(element.latitude,element.longitude));
         this.arrow=this.route.arrowheads({ fill: true, frequency: 5});
        //this.marker.setLatLng([element.latitude,element.longitude]).bindTooltip("Loc:"+element.latitude+", "+element.longitude).addTo(this.map);
      });
      console.log(this.positions)
      //this.history.addTo(this.map)
      this.n = {
        "Objects": this.history
      };
this.history.addTo(this.map)
this.parking.addTo(this.map)
      this.a = {
        "Route": this.route,
        "Engine": this.history,
        //"Arrow": this.arrow,
        "Parking": this.park,

      };
  
      // var m = {
      //   "Route": this.route
      // };
      L.control.layers(this.baseMaps,this.a).addTo(this.map);
    })
   
   
  }
 


  getAllDevice(): void {
    this.deviceService.getAllDevices().subscribe(res => {
      this.devices = res;
      var dev = res

      this.devices.forEach((element,i) => {
        this.marker[element.unique_id]=L.marker([element.latitude, element.longitude], { icon: this.myIcon }).bindPopup(element.unique_id, { closeOnClick: false, autoClose: false });
        this.markerArray.push(this.marker[element.unique_id])
        //this.cities = L.layerGroup(this.markerArray);
      })

console.log(this.markerArray[0]._popup._content)
console.log(this.markerArray)
      this.map.removeLayer(this.markerArray[0]);
      console.log(this.markerArray[0])
      this.cities = L.layerGroup(this.markerArray);
this.cities.addTo(this.map)
//this.map.removeLayer(this.markerArray[1]);
      this.overlayMaps = {
        "Objects": this.cities
      };

      // var m = {
      //   "Route": this.route
      // };
      L.control.layers(this.baseMaps,this.overlayMaps).addTo(this.map);

      setTimeout(() => {
        var g=this.cities
        console.log(this.devices)
        var leftbar = document.getElementsByClassName("left_bar");
        var filter = document.getElementsByClassName("filter");

        var submit = document.getElementsByClassName("submit");
        var info = document.getElementsByClassName("view-info");
        console.log(submit)


        var filterFunction = function (event) {
          console.log(this.dev)
          this.devices = this.dat.filter(x => x.name === event.key)
          console.log(this.devices)

        }

        var submitFunction = function () {
          console.log("ttttttttest")
        }

        var t = this;

        var infoFunction = function () {
          var id = this.getAttribute("info-name");
          console.log(id)
          console.log(dev)
          var result = dev.filter(obj => {
            return obj.unique_id === id
          })
          console.log(result)
          this.checkData = result
          t.testFunction(result);
          //console.log(this.checkData)
        }


        var myFunction = function (e) {
          var name = this.getAttribute("data-name");
          if (e.target.checked) {
            console.log(g)
            t.map.removeLayer(t.markerArray[101]);
            console.log(name, "Checked");
          } else {
            t.map.addLayer(t.markerArray[101]);
            console.log(name, "Unchecked");
          }
        };
        console.log("AAAAAAAAA");
        for (var i = 0; i < leftbar.length; i++) {
          console.log("XXXXXXXXX");
          leftbar[i].addEventListener('click', myFunction, false);
        }

        for (var i = 0; i < submit.length; i++) {
          console.log("XXXXXXXXX");
          submit[i].addEventListener('click', submitFunction, false);
        }

        for (var i = 0; i < filter.length; i++) {
          console.log("3333XXXXXXXXX");
          filter[i].addEventListener('keyup', filterFunction, false);
        }

        for (var i = 0; i < info.length; i++) {
          info[i].addEventListener('click', infoFunction, false);
        }
        console.log("BBBBBBBBBBB");
      }, 500);

       this.html ='<div style="height:30px; class="tab">'
      this.html ='<button class="tablinks">London</button>'
      this.html ='<button class="tablinks" ">Paris</button>'
      this.html ='<button class="tablinks" ">Tokyo</button>'
      this.html ='</div>'
    

      this.html='<h3>Object<h3>';
      this.html = '<table  class="content">';
      // 
      this.html += '<input style="margin:5px;width:60%" class="filter" id="filter"  type="text"   >';
      this.html += '<button class="submit" type="button" id="btn" >+</button>'
      this.html += '<button class="submit" type="button" id="btn" >#</button>'
      
      if (this.devices) {

        this.devices.forEach((element, ind) => {
          this.html += '<tr style="height:30px;font-size:16px">';
          this.html += '<td style="width:18px">    <input data-name="' + element.unique_id + '" type="checkbox" class="left_bar" name="vehicle1" value="Bike" /></td>';
          this.html += '<td style="font-size:18px"><a info-name="' + element.unique_id + '" class="view-info">' + element.name + '</a></td>';
          this.html += '<td>' + '<a><i style="color:red" class="fa fa-circle" aria-hidden="true"></i></a>' + '</td>';
          this.html += '<td>' + '<a><i style="font-size:12px" class="fa">&#xf142;</i></a>' + '</td>';

          this.html += '</tr>';
        });
      }

      this.html += '</table>';
    
      if (this.devices) {
        console.log(this.checkData)
        this.bottomHtml = '<table  class="content">';
        this.bottomHtml += '<tr style="height:30px;font-size:16px">';
        this.bottomHtml += '<td style="font-size:18px"><a info-name="' + this.devices[0].unique_id + '" class="view-info">' + this.devices[0].name + '</a></td>';
        this.bottomHtml += '<td>' + '<a><i style="color:red" class="fa fa-circle" aria-hidden="true"></i></a>' + '</td>';
        this.bottomHtml += '<td>' + '<a><i style="font-size:12px" class="fa">&#xf142;</i></a>' + '</td>';

        this.bottomHtml += '</tr>';
        this.bottomHtml += '</table>';
      }
      console.log(this.html)
      L.control.slideMenu(this.html, { position: 'topleft', menuposition: 'topleft', width: '25%', height: '100%', direction: 'horizontal', icon: 'fa-chevron-right' }).addTo(this.map);
      //L.control.slideMenu(this.bottomHtml, { position: 'bottomright', menuposition: 'bottomright', width: '75%', height: '170px', icon: 'fa-chevron-left' }).addTo(this.map);
      this.k.push(this.devices[0])
      console.log(this.k)
      this.testFunction(this.k)
    });

  //   var popup = L.popup();
  //   function onMapClick(marker) {
  //     popup.setLatLng(marker.latlng)
  //       .setContent('You clicked the map at ' + marker.latlng.toString())
  //       .openOn(this.map);
  //   }

  //  this.map.on('click', onMapClick);

  }


  testFunction(e) {
    if (e) {
      this.bottomHtml = '<table  class="content">';
      this.bottomHtml += '<tr style="height:30px;font-size:16px">';
      this.bottomHtml += '<td style="font-size:18px"><a info-name="' + e[0].unique_id + '" class="view-info">' + e[0].name + '</a></td>';
      this.bottomHtml += '<td>' + '<a><i style="color:red" class="fa fa-circle" aria-hidden="true"></i></a>' + '</td>';
      this.bottomHtml += '<td>' + '<a><i style="font-size:12px" class="fa">&#xf142;</i></a>' + '</td>';

      this.html += '</tr>';
      this.bottomHtml += '</table>';
    }
    var s = L.control.slideMenu('', { position: 'bottomright', menuposition: 'bottomright', width: '75%', height: '170px', icon: 'fa-chevron-left' }).addTo(this.map);

    s.setContents(this.bottomHtml);

  }

  logout() { }


call(){
  console.log("cbbcbvccccccvvvvvvvvv")
}

// openMenuModal() {
//   const dialogCofig = new MatDialogConfig();
//   dialogCofig.disableClose = true;
//   dialogCofig.width = "600px";
//   dialogCofig.height = "480px";

//   this.dialog.open(SlideMenuComponent,  {
//     width: '100%',
//     height: '460px',
//     //data: { pageValue: data.id }
//   }).afterClosed()
//   .subscribe(response => {});
// }

openMenuModal() {
  this.opened=true
}

}
