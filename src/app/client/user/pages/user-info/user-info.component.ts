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
import 'leaflet-control-geocoder';
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
import { Router } from '@angular/router';
import { DateformateService } from 'src/app/shared/services/dateformate.service';
import { CusmapService } from 'src/app/map/customer-map/services/cusmap.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})



export class UserInfoComponent implements OnInit {
  fixtime;
  par=[]
  line
  marking
  historyItem
  deviceIdArray = []
  m: number;
  check;
  myInterval


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
  //admin=1;
  devices = []
  mediaSub: Subscription;
  deviceXs: boolean;
  fruits = ["apple", "orange", "cherry"];
  constructor(private mediaObserver: MediaObserver,
    private deviceService: DeviceService,
    private dialog: MatDialog,
    private mapService: MapService,
    private router: Router,
    private dateFormatService: DateformateService,
    private cusmapService: CusmapService,
  ) {
    //this.getAllDevice();

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
      iconUrl: './assets/client/images/bike.png',
      iconSize: [40, 80],
      iconAnchor: [12, 69],
      color: 'green',
      className: 'icon'

    });

    this.map = L.map('mapid', {
      center: [23.774252395907105, 90.41607082790188],
      zoom: 17,
      zoomControl: false,
      attributionControl: false
    });

    var openStreet = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
    // , {
    //   attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }

    // this.map.on('click', function (e) {
    //   alert("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng)
    // });


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

    var layerGroup = L.layerGroup().addTo(this.map);

    this.baseMaps = {
      "OSM": openStreet,
      "Google Map": googleStreets
    }

    this.overlayMaps = {
      "Objects": layerGroup
    }

    L.control.layers(this.baseMaps,this.overlayMaps).addTo(this.map);


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

var mapDevice=[]
 var pai = L.layerGroup()
    this.mapService.movingDataCatch.subscribe(res => {
      this.updateData = res;
      if (res) {
        this.check = 1;
        this.fixtime = res[0].fixtime
        this.fixtime = this.dateFormatService.dateTime('datetime', this.fixtime)
        res.forEach(element => {
          if(!this.deviceIdArray.includes(element.deviceid)){
            this.deviceIdArray.push(element.deviceid)
          
          
          console.log(element.deviceid)
          mapDevice[element.deviceid] = L.marker([element.latitude, element.longitude], { icon: this.myIcon3 }).bindPopup(element.name + " <br> Address: " + element.contact
          + " <br> Model: " + element.model + " <br> Phone: " + element.phone + " <br> Type: " + element.category, { closeOnClick: false, autoClose: false }).addTo(this.map)
          layerGroup.addLayer(mapDevice[element.deviceid]);
        }}
        );

        var polyline = L.polyline([]).addTo(this.map);


        this.myInterval = setInterval(() => {
          var data = { id: this.deviceIdArray, fixtime: this.fixtime }
          if (this.check == 1) {
            this.deviceService.getMovingPosition(data).subscribe(data => {
              data.forEach(element => {
                this.fixtime = element.fixtime;
                var latlng = { lat: element.latitude, lng: element.longitude }
                const v = L.Control.Geocoder.nominatim();
                v.reverse(latlng, this.map.options.crs.scale(this.map.getZoom()), results => {
                  element.address = (results[0].name)
                  this.cusmapService.detailsDataExchange(element);
                })

                var marker
                //var marker= L.marker([0,0],{icon:this.myIcon3}).addTo(this.map);
                var markers = L.layerGroup()
                this.markerArray = L.layerGroup()
                console.log(element)
                this.marker = mapDevice[element.deviceid].setLatLng([element.latitude, element.longitude]).bindPopup(element.name + " <br> Address: " + element.contact
                  + " <br> Model: " + element.model + " <br> Phone: " + element.phone + " <br> Type: " + element.category, { closeOnClick: false, autoClose: false })
                if (element) {
                  this.line = polyline.addLatLng(L.latLng(element.latitude, element.longitude)).arrowheads({ size: '10px', color: 'red', frequency: 'endonly' });
                }

              })
            })
          }
        }, 5 * 1000)
     
       

      }
    })

    this.overlayMaps = {
      "objects": layerGroup,
      "Google Map": googleStreets
    }


    this.mapService.remove.subscribe(res => {
      if (res) {
        console.log(res)
        res.forEach(element => {
          this.deviceIdArray = this.deviceIdArray.filter(item => item !== element.id)
          console.log(element.id)
          this.map.removeLayer(mapDevice[element.id])
          if(this.line){
            this.map.removeLayer(this.line)
          }

          console.log(this.deviceIdArray.length)
          if(this.deviceIdArray.length<=0){
            console.log("check")
            this.check=0;
            clearInterval(this.myInterval);
          }
          
        });
      }
    })

    // center position

    this.mapService.s.subscribe(res => {
      if (res) {
        // var latlng2 = { lat: res[0].latitude, lng: res[0].longitude }
        // console.log(latlng2)
        // const v = L.Control.Geocoder.nominatim();
        // v.reverse(latlng2, this.map.options.crs.scale(this.map.getZoom()), results => {
        //   res.address = (results[0].name)
        //   this.mapService.selectedDeviceDataExchange(res)
        // })
        this.map.panTo(new L.LatLng(res[0].latitude, res[0].longitude));
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



    // this.mapService.deviceGroupRemove.subscribe(res => {
    //   console.log(res)

    //   if (res) {
    //     console.log(this.markerArrayIndex)
    //     var item = this.markerArrayIndex.findIndex(item => item._popup._content === '103');
    //     console.log(item)
    //     this.map.removeLayer(this.markerArrayIndex[1]);
    //     console.log(this.markerArrayIndex)
    //   }
    // })

// history show

    this.mapService.historyData.subscribe(res => {
      if (res) {
       // myButton.disable();
       this.map.removeLayer(layerGroup)
       console.log("......")
    
       controlBar.hide();
        this.historyBar.show();
        this.viewHistory=1
        var polyline = L.polyline([]).addTo(this.map);
        this.positions = res;
        this.positions.forEach((element, i) => {
          if (element.course == 'off') {
            this.engine = L.marker([element.latitude, element.longitude], { icon: this.myIcon }).bindPopup(element.deviceid + " <br> Address: " + element.latitude
            + " <br> Model: " + element.longitude + " <br> Speed: " + element.speed + " <br> Power: " + element.course, { closeOnClick: false, autoClose: false }).openPopup();;
            this.engineArray.push(this.engine)
            this.history = L.layerGroup(this.engineArray);
          }
          this.timeArray.push(element.altitude)
          var time = this.timeArray[i] - this.timeArray[i - 1]
          if (time > 10) {
            //console.log("=====")
            this.park = L.marker([element.latitude, element.longitude], { icon: this.myIcon2 }).bindTooltip(element.latitude);
            this.parkArray.push(this.park)
            this.parking = L.layerGroup(this.parkArray);
          }
          //console.log(time);
          this.route = polyline.addLatLng(L.latLng(element.latitude, element.longitude));

          this.arrow = this.route.arrowheads({size: '20px',color:'red',yawn: 40, frequency: 5 });
          //this.marker.setLatLng([element.latitude,element.longitude]).bindTooltip("Loc:"+element.latitude+", "+element.longitude).addTo(this.map);
          this.storeLatlng.push([element.latitude,element.longitude])
         
        });
        // this.n = {
        //   "Objects": this.history
        // };
        // this.history.addTo(this.map)
        // this.parking.addTo(this.map)
        // this.a = {
        //   "Route": this.route,
        //   "Engine": this.history,
          
        //   "Parking": this.parking,

        // };
      //"Arrow": this.arrow,
        //L.control.layers(this.baseMaps, this.a).addTo(this.map);
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

    
    this.mapService.indexDetailsView.subscribe(res => {
      console.log(res)
      if (res) {
        if(this.route){
          //this.map.removeLayer(this.history);
          this.map.removeLayer(this.route);
          //this.map.removeLayer(this.parking);
        }
        if(layerGroup){
          this.map.addLayer(layerGroup)
        }
        
        //controlBar.show();
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


  logout() { 
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    localStorage.removeItem('rolesData');
    this.router.navigate(['/']);
  }


  call() {
    console.log("cbbcbvccccccvvvvvvvvv")
  }



  openMenuModal() {
    this.opened = true
  }
  Action() {

  }


}
