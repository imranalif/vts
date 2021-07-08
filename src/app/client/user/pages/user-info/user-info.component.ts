import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
// /var/projects/angular/VTSApp/angular/node_modules/leaflet-slidemenu/src/L.Control.SlideMenu.js

import { DOCUMENT } from '@angular/common';
import { Subscription } from 'rxjs';
import * as L from 'leaflet';
import 'leaflet-slidemenu';
import 'leaflet-sidebar';
import 'leaflet-control-bar';
import 'leaflet-easybutton';
import '/var/projects/angular/VTSApp/angular/node_modules/leaflet.motion/src/leaflet.motion.js';
import '/var/projects/angular/VTSApp/angular/node_modules/leaflet.motion/dist/leaflet.motion.min.js';

import 'leaflet-arrowheads'
import '/var/projects/angular/VTSApp/angular/node_modules/leaflet-slidemenu/src/L.Control.SlideMenu.js'
// import '/var/projects/angular/VTSApp/angular/node_modules/leaflet-control-bar/src/L.Control.Bar.css'
// import '/var/projects/angular/VTSApp/angular/node_modules/leaflet-control-bar/src/L.Control.Bar.js'
import { DriverListComponent } from 'src/app/admin/driver/pages/driver-list/driver-list.component';
import { DeviceService } from 'src/app/admin/devices/services/device.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SlideMenuComponent } from '../slide-menu/slide-menu.component';
import { MapService } from '../../services/map.service';
import { reduce } from 'rxjs/operators';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})



export class UserInfoComponent implements OnInit {
  storeLatlng=[]
  polylineMotion
  viewHistory = 0;
  historyBar
  controlBar
  updateData
  timeArray = []
  overlayMaps
  baseMaps
  n
  a
  myIcon
  myIcon2
  myIcon3
  cities
  positions

  route
  engine
  engineArray = []
  arrow
  park
  parkArray = []
  parking
  history

  marker = []
  markerArray = []
  markerArrayIndex = []
  nameArray = []
  names
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
  sideMode = "over"
  dataSource = new MatTableDataSource<any>([]);
  map
  devices = []
  mediaSub: Subscription;
  deviceXs: boolean;
  fruits = ["apple", "orange", "cherry"];
  constructor(private mediaObserver: MediaObserver,
    private deviceService: DeviceService,
    private dialog: MatDialog,
    private mapService: MapService
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
      color: 'green',
      className: 'icon'

    });

    this.myIcon2 = L.icon({
      iconUrl: './assets/client/images/nn.png',
      iconSize: [20, 40],
      iconAnchor: [12, 39],
      color: 'green',
      className: 'icon'

    });

    this.myIcon3 = L.icon({
      iconUrl: './assets/client/images/123.png',
      iconSize: [40, 80],
      iconAnchor: [12, 69],
      color: 'green',
      className: 'icon'

    });

    this.map = L.map('mapid', {
      center: [23.73885035844803365, 90.39647340774536],
      zoom: 15,
      zoomControl: false
    });

    var openStreet = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
    // , {
    //   attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }

    this.map.on('click', function (e) {
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

    openStreet.addTo(this.map);

    this.baseMaps = {
      "OSM": openStreet,
      "Google Map": googleStreets
    }



    //L.control.layers(baseMaps,this.overlayMaps).addTo(this.map);


    var sidebar = L.control.sidebar('sidebar').addTo(this.map);
    sidebar.show();
    L.easyButton('fa-exchange', function (btn, map) {
      sidebar.toggle()
    }).addTo(this.map);

    //var bottommenu = L.control.sidebar('bottommenu', { position: 'bottom' }).addTo(this.map);

    // L.easyButton('fa-exchange', function (btn, map) {
    //   bottommenu.toggle()
    // }).addTo(this.map);

    var controlBar = L.control.bar('menu', {
      position: 'bottom',
      visible: false
    }).addTo(this.map);;
    controlBar.show();
    //this.controlBar.toggle()
  var myButton= L.easyButton('fa-exchange', function (btn, map) {
      controlBar.toggle()
    },{ position: 'bottomright' }).addTo(this.map);
  

  //   L.easyButton({    states: [{
  //     stateName: 'zoom-to-forest',        // name the state
  //     icon:      'fa-exchange',  
  //     position: 'topright',             // and define its properties
  //     title:     'zoom to a forest',      // like its title
  //     onClick: function(btn, map) {       // and its callback
  //       controlBar.toggle()   // change state on click!
  //     }
  // }]}).addTo(this.map);

this.historyBar = L.control.bar('history', {
      position: 'bottom',
      visible: false
    }).addTo(this.map);;
    

// add device

    this.mapService.share.subscribe(res => {
      console.log(this.markerArray)
      this.updateData = res;
      if (res) {
       
        res.forEach(element => {
          console.log(element.name)
          var item = this.markerArray.findIndex(item => item._tooltip._content === element.name);
          console.log(item)
          this.map.addLayer(this.markerArray[item]);
        });
        // var item = this.markerArray.findIndex(item => item._popup._content === res.device_id);
        // console.log(item)
        // this.map.addLayer(this.markerArray[item]);
        //this.map.removeLayer(this.markerArray[1]);

      }
    })

    this.mapService.remove.subscribe(res => {
      if (res) {
        res.forEach(element => {
          console.log(element)
          var item = this.markerArray.findIndex(item => item._tooltip._content === element.name);
          //this.map.addLayer(this.markerArray[1]);
         console.log(this.markerArray[item])
          this.map.removeLayer(this.markerArray[item]);
        });
      }
    })

    // center position

    this.mapService.s.subscribe(res => {
      if (res) {
        this.map.panTo(new L.LatLng(res.lat, res.lng));
      }
    })


    // add device grouply

    this.mapService.deviesMove.subscribe(res => {
      if (res) {
        
        console.log("test")
        console.log(res)
        //this.map.addLayer(this.markerArray[1]);
        res.forEach((element, i) => {
          this.marker[element.id] = L.marker([element.latitude, element.longitude], { icon: this.myIcon }).bindPopup(element.id, { closeOnClick: false, autoClose: false });
          this.markerArrayIndex.push(this.marker[element.id])
        })
        // this.markerArray.forEach((elem, i) => {
        //   this.markerArrayIndex[elem._popup._content] = this.markerArray[i];
        // }
        // );
        console.log(this.markerArrayIndex)
        this.cities = L.layerGroup(this.markerArrayIndex);
        this.cities.addTo(this.map)
        this.overlayMaps = {
          "Objects": this.cities,
        };
        L.control.layers(this.overlayMaps).addTo(this.map);
      }
    })



    this.mapService.deviceGroupRemove.subscribe(res => {
      console.log(res)

      if (res) {
        console.log(this.markerArrayIndex)
        var item = this.markerArrayIndex.findIndex(item => item._popup._content === '103');
        console.log(item)
        this.map.removeLayer(this.markerArrayIndex[1]);
        console.log(this.markerArrayIndex)
      }
    })

// history show

    this.mapService.historyData.subscribe(res => {
      if (res) {
        myButton.disable();
       controlBar.hide();
        this.historyBar.show();
        this.viewHistory=1
        var polyline = L.polyline([]).addTo(this.map);
        this.positions = res;
        this.positions.forEach((element, i) => {
          if (element.power == 'off') {
            this.engine = L.marker([element.latitude, element.longitude], { icon: this.myIcon }).bindPopup(element.device_id + " <br> Address: " + element.latitude
            + " <br> Model: " + element.longitude + " <br> Speed: " + element.speed + " <br> Power: " + element.power, { closeOnClick: false, autoClose: false }).openPopup();;
            this.engineArray.push(this.engine)
            this.history = L.layerGroup(this.engineArray);
          }
          this.timeArray.push(element.timestamp)
          var time = this.timeArray[i] - this.timeArray[i - 1]
          if (time > 10) {
            //console.log("=====")
            this.park = L.marker([element.latitude, element.longitude], { icon: this.myIcon2 }).bindTooltip(element.latitude);
            this.parkArray.push(this.park)
            this.parking = L.layerGroup(this.parkArray);
          }
          //console.log(time);
          this.route = polyline.addLatLng(L.latLng(element.latitude, element.longitude));

          this.arrow = this.route.arrowheads({color:'green', fill: true, frequency: 5 });
          //this.marker.setLatLng([element.latitude,element.longitude]).bindTooltip("Loc:"+element.latitude+", "+element.longitude).addTo(this.map);
          this.storeLatlng.push([element.latitude,element.longitude])
         
        });
        this.n = {
          "Objects": this.history
        };
        this.history.addTo(this.map)
        this.parking.addTo(this.map)
        this.a = {
          "Route": this.route,
          "Engine": this.history,
          //"Arrow": this.arrow,
          "Parking": this.parking,

        };
      
        L.control.layers(this.baseMaps, this.a).addTo(this.map);
        this.polylineMotion = L.motion
        .polyline(this.storeLatlng,
          {
            color: ' '
          },
          {
            auto: false,
            duration: 10000,
            easing: L.Motion.Ease.easeInOutQuart
          },
          {
            removeOnEnd: true,
            //showMarker: true,
            icon:this.myIcon3
          }
        ).addTo(this.map);
      }
    })

    this.mapService.startDevice.subscribe(res => {
      if (res) {
        this.polylineMotion.motionStart();
      }
    })
    this.mapService.toggleDevice.subscribe(res => {
      if (res) {
        this.polylineMotion.motionToggle();
      }
    })

    this.mapService.indexHistoryView.subscribe(res => {
      console.log(res)
      if (res) {
        console.log(this.markerArray[0])
        this.map.removeLayer(this.markerArray[0]);
        //this.map.panTo(new L.LatLng(res.lat, res.lng));
      }
    })

    this.mapService.indexDetailsView.subscribe(res => {
      console.log(res)
      if (res) {
        if(this.history){
          this.map.removeLayer(this.history);
          this.map.removeLayer(this.route);
          this.map.removeLayer(this.parking);
        }
        controlBar.show();
        this.historyBar.hide();
        //this.map.panTo(new L.LatLng(res.lat, res.lng));
      }
    })



    //this.getAllPosition();
  }


  getAllPosition() {
    var polyline = L.polyline([]).addTo(this.map);
    this.deviceService.getAllPostion().subscribe(res => {
      this.positions = res;
      this.positions.forEach((element, i) => {
        if (element.power == 'off') {
          this.engine = L.marker([element.latitude, element.longitude], { icon: this.myIcon }).bindPopup(element.device_id + " <br> Address: " + element.latitude
          + " <br> Model: " + element.longitude + " <br> Speed: " + element.speed + " <br> Power: " + element.power, { closeOnClick: false, autoClose: false }).openPopup();
          this.engineArray.push(this.engine)
          this.history = L.layerGroup(this.engineArray);
        }
        this.timeArray.push(element.timestamp)
        var time = this.timeArray[i] - this.timeArray[i - 1]
        if (time > 10) {
          //console.log("=====")
          this.park = L.marker([element.latitude, element.longitude], { icon: this.myIcon2 }).bindTooltip(element.latitude);
          this.parkArray.push(this.park)
          this.parking = L.layerGroup(this.parkArray);
        }
        //console.log(time);
        this.route = polyline.addLatLng(L.latLng(element.latitude, element.longitude));
        this.arrow = this.route.arrowheads({ fill: true, frequency: 5 });
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
        "Parking": this.parking,

      };

      // var m = {
      //   "Route": this.route
      // };
      L.control.layers(this.baseMaps, this.a).addTo(this.map);
    })


  }



  getAllDevice(): void {
    this.deviceService.getAllDevices().subscribe(res => {
      this.devices = res;
      var dev = res

      this.devices.forEach((element, i) => {
        this.marker[element.unique_id] = L.marker([element.latitude, element.longitude], { icon: this.myIcon3 }).bindPopup(element.name + " <br> Address: " + element.contact
          + " <br> Model: " + element.model + " <br> Phone: " + element.phone + " <br> Type: " + element.category, { closeOnClick: false, autoClose: false }).openPopup().bindTooltip(element.name, {
            permanent: true
          });
        this.markerArray.push(this.marker[element.unique_id])
        this.names = this.marker[element.unique_id].openPopup();
        //this.cities = L.layerGroup(this.markerArray);
      })

      //console.log(this.markerArray[0]._popup._content)
      //console.log(this.markerArray)
      this.map.removeLayer(this.markerArray[0]);
      //console.log(this.markerArray[0])
      this.cities = L.layerGroup(this.markerArray);
      //this.names = L.layerGroup(this.nameArray);
      //this.cities.addTo(this.map)
      //this.names.addTo(this.map)
      //this.map.removeLayer(this.markerArray[1]);
      this.overlayMaps = {
        "Objects": this.cities

        //"Names": this.names
      };

      // var m = {
      //   "Route": this.route
      // };
      L.control.layers(this.baseMaps, this.overlayMaps).addTo(this.map);

      setTimeout(() => {
        var g = this.cities
        console.log(this.devices)
        var check = document.getElementsByClassName("check");
        var leftbar = document.getElementsByClassName("left_bar");
        var filter = document.getElementsByClassName("filter");

        var submit = document.getElementsByClassName("submit");
        var info = document.getElementsByClassName("view-info");



        var submitCheck = function () {
          console.log("check")
        }

        var filterFunction = function (event) {

          this.devices = this.dat.filter(x => x.name === event.key)


        }

        var submitFunction = function () {

        }

        var t = this;

        var infoFunction = function () {
          var id = this.getAttribute("info-name");

          var result = dev.filter(obj => {
            return obj.unique_id === id
          })

          this.checkData = result
          //t.testFunction(result);
          //console.log(this.checkData)
        }


        var myFunction = function (e) {
          var name = this.getAttribute("data-name");
          if (e.target.checked) {
            console.log(g)
            t.map.addLayer(t.markerArray[1]);
            console.log(name, "Checked");
          } else {

            t.map.removeLayer(t.markerArray[1]);
            console.log(name, "Unchecked");
          }
        };

        for (var i = 0; i < leftbar.length; i++) {

          leftbar[i].addEventListener('click', myFunction, false);
        }

        for (var i = 0; i < submit.length; i++) {

          submit[i].addEventListener('click', submitFunction, false);
        }

        for (var i = 0; i < filter.length; i++) {
          console.log("3333XXXXXXXXX");
          filter[i].addEventListener('keyup', filterFunction, false);
        }

        for (var i = 0; i < info.length; i++) {
          info[i].addEventListener('click', infoFunction, false);
        }

        for (var i = 0; i < check.length; i++) {
          info[i].addEventListener('click', submitCheck, false);
        }

      }, 500);


    });



  }


  logout() { }


  call() {
    console.log("cbbcbvccccccvvvvvvvvv")
  }



  openMenuModal() {
    this.opened = true
  }
  Action() {

  }


}
