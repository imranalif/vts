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
import { ChangepassPopupComponent } from 'src/app/admin/authorization/users/pages/changepass-popup/changepass-popup.component';
import { UserprofilePopupComponent } from 'src/app/admin/authorization/users/pages/userprofile-popup/userprofile-popup.component';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})



export class UserInfoComponent implements OnInit {
  polyline=[]

  fixtime;
  par = []
  line
  marking
  historyItem
  deviceIdArray = []
  m: number;
  check;
  myInterval


  storeLatlng = []
  polylineMotion
  viewHistory = 0;
  historyBar
  controlBar
  updateData
  timeArray = []
  fixtimeArray = []
  overlayMaps
  baseMaps
  n
  a
  myIcon
  myIcon2
  myIcon3
  myIcon4
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

    this.myIcon4 = L.icon({
      iconUrl: './assets/client/images/nn.png',
      iconSize: [0, 0],
      iconAnchor: [0, 0],
      color: 'green',
      className: 'icon'

    })


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

    L.control.layers(this.baseMaps, this.overlayMaps).addTo(this.map);


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
    controlBar.hide();
    //this.controlBar.toggle()
    var myButton = L.easyButton('fa-exchange', function (btn, map) {
      controlBar.toggle()
    }, { position: 'bottomright' }).addTo(this.map);


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
    var lineArray=[]
    var lineArray1=[]
    var lineArray2=[]
    var lineArray3=[]
    var lineArray4=[]
    var mapDevice = []
    var pai = L.layerGroup()
    this.mapService.movingDataCatch.subscribe(res => {
      console.log(res)
      this.updateData = res;
      if (res) {
        this.check = 1;
        if(!this.fixtime){
          this.fixtime='2020-08-18T05:42:11.000Z';
        }
        if(this.fixtime < res[0].fixtime){
          this.fixtime = res[0].fixtime
        }
        //this.fixtime = this.dateFormatService.dateTime('datetime', this.fixtime)
        res.forEach(e => {
          console.log(e)
          console.log(e.latitude)
          if (!this.deviceIdArray.includes(e.deviceid)) {
            this.deviceIdArray.push(e.deviceid)
            this.polyline[res[0].deviceid]= L.polyline([]).addTo(this.map);
            console.log(e.deviceid)
            mapDevice[e.deviceid] = L.marker([e.latitude, e.longitude], { icon: this.myIcon3 }).bindPopup(e.name + " <br> Address: " + e.contact
              + " <br> Model: " + e.model + " <br> Phone: " + e.phone + " <br> Type: " + e.category, { closeOnClick: false, autoClose: false }).addTo(this.map)
            layerGroup.addLayer(mapDevice[e.deviceid]);
          }
        }
        );
        //var polyline = L.polyline([]).addTo(this.map);

        this.myInterval = setInterval(() => {
          this.fixtime = this.dateFormatService.dateTime('datetime', this.fixtime)
          var data = { id: this.deviceIdArray, fixtime: this.fixtime }
          console.log(this.check)
          if (this.check == 1) {
            this.deviceService.getMovingPosition(data).subscribe(data => {
              data.forEach(element => {
                this.fixtime = element.fixtime;
                // var latlng = { lat: element.latitude, lng: element.longitude }
                // const v = L.Control.Geocoder.nominatim();
                // v.reverse(latlng, this.map.options.crs.scale(this.map.getZoom()), results => {
                //   element.address = (results[0].name)
                //   this.cusmapService.detailsDataExchange(element);
                // })

                var marker
                //var marker= L.marker([0,0],{icon:this.myIcon3}).addTo(this.map);
                var markers = L.layerGroup()
                this.markerArray = L.layerGroup()
                this.marker = mapDevice[element.deviceid].setLatLng([element.latitude, element.longitude]).bindPopup(element.name + " <br> Address: " + element.contact
                  + " <br> Model: " + element.model + " <br> Phone: " + element.phone + " <br> Type: " + element.category, { closeOnClick: false, autoClose: false })

                  this.line = this.polyline[element.deviceid].addLatLng(L.latLng(element.latitude, element.longitude)).arrowheads({ size: '10px', color: 'red', frequency: 'endonly' });
                // if (element) {
                //   this.line = polyline.addLatLng(L.latLng(element.latitude, element.longitude)).arrowheads({ size: '10px', color: 'red', frequency: 'endonly' });
                // }

              })
            })
          }
        }, 5 * 1000)}
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
          // if (this.line) {
          //   this.map.removeLayer(this.line)
          // }
// add korte hobe line gari adding ar sathe
          if(this.polyline[element.id]){
            this.map.removeLayer(this.polyline[element.id])
          }

          console.log(this.deviceIdArray.length)
          if (this.deviceIdArray.length <= 0) {
            console.log("check")
            this.check = 0;
            clearInterval(this.myInterval);
          }

        });
      }
    })


    // eventInfomation showing

    this.cusmapService.eventCatch.subscribe(res => {
      if (res) {
        var address
        var latlng = { lat: res[0].latitude, lng: res[0].longitude }
        const v = L.Control.Geocoder.nominatim();
        v.reverse(latlng, this.map.options.crs.scale(this.map.getZoom()), results => {
          address = (results[0].name)
        })

        var eventMarkar = L.marker([res[0].latitude, res[0].longitude], { icon: this.myIcon4 }).addTo(this.map).bindPopup("<b>" + res[0].name + "</b>" + " <br> Address: " + address
          + " <br> Latitude: " + res[0].latitude + " <br> Longitude: " + res[0].longitude + " <br> Altitude: " + res[0].altitude + " <br> Speed: " + res[0].speed
          + " <br> Time: " + res[0].eventtime, { closeOnClick: true, autoClose: false }).openPopup();
        this.map.panTo(new L.LatLng(res[0].latitude, res[0].longitude));
      }
    })

    // center position

    this.mapService.s.subscribe(res => {
      if (res) {
        controlBar.show();
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



   

    this.mapService.historyData.subscribe(res => {
      if (res) {
        // myButton.disable();
        this.map.removeLayer(layerGroup)
        console.log("......")

        controlBar.hide();
        this.historyBar.show();
        this.viewHistory = 1
        var polyline = L.polyline([]).addTo(this.map);
        this.positions = res;
        this.storeLatlng = [];
        this.map.setView(new L.LatLng(this.positions[0].latitude, this.positions[0].longitude), 13);
        this.positions.forEach((element, i) => {
          // if (element.course == 'off') {
          //   this.engine = L.marker([element.latitude, element.longitude], { icon: this.myIcon }).bindPopup(element.deviceid + " <br> Address: " + element.latitude
          //   + " <br> Model: " + element.longitude + " <br> Speed: " + element.speed + " <br> Power: " + element.course, { closeOnClick: false, autoClose: false }).openPopup();;
          //   this.engineArray.push(this.engine)
          //   this.history = L.layerGroup(this.engineArray);
          // }
          let expireTime = new Date(element.servertime);
          let fixTime = new Date(element.fixtime);
          this.timeArray.push(expireTime)
          this.fixtimeArray.push(fixTime)
          var time = (this.timeArray[i] - this.fixtimeArray[i]) / (1000 * 60);
          if (time > 20) {
            this.engine = L.marker([element.latitude, element.longitude], { icon: this.myIcon }).bindPopup(element.deviceid + " <br> Address: " + element.latitude
              + " <br> Model: " + element.longitude + " <br> Servertime: " + element.servertime + " <br> Speed: " + element.speed + " <br> Power: " + element.course, { closeOnClick: true, autoClose: false }).openPopup();
            this.engineArray.push(this.engine)
            this.history = L.layerGroup(this.engineArray);
          }
          // var address
          // if (time < 20 && time > 5) {

          //   this.park = L.marker([element.latitude, element.longitude], { icon: this.myIcon2 }).bindPopup(element.deviceid + " <br> Address: " + address
          //     + " <br> Latitude: " + element.latitude + " <br> Longitude: " + element.longitude + " <br> Servertime: " + element.servertime + " <br> Altitude: " + element.altitude + " <br> Speed: " + element.speed , { closeOnClick: true, autoClose: false }).openPopup().addTo(this.map);
          //   this.parkArray.push(this.park)
          //   this.parking = L.layerGroup(this.parkArray);
          // }
          //console.log(time);
          this.route = polyline.addLatLng(L.latLng(element.latitude, element.longitude));

          this.arrow = this.route.arrowheads({ size: '10px', color: 'red', yawn: 40, frequency: 10 });
          //this.marker.setLatLng([element.latitude,element.longitude]).bindTooltip("Loc:"+element.latitude+", "+element.longitude).addTo(this.map);
          this.storeLatlng.push([element.latitude, element.longitude])

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
              duration: 30000,
              easing: L.Motion.Ease.easeInOutQuart
            },
            {
              removeOnEnd: false,
              //showMarker: true,
              icon: this.myIcon3
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
        this.map.setView(new L.LatLng(23.774252395907105, 90.41607082790188), 17);
        if (this.route) {
          //this.map.removeLayer(this.history);
          this.map.removeLayer(this.route);
          //this.map.removeLayer(this.parking);
        }
        if (this.parking) {
          this.map.removeLayer(this.parking);
        }
        if (this.history) {
          this.map.removeLayer(this.history);
        }
        if (layerGroup) {
          this.map.addLayer(layerGroup)
        }

        //controlBar.show();
        this.historyBar.hide();
        //this.map.panTo(new L.LatLng(res.lat, res.lng));
      }
    })


    var circle = L.circle([23.774252395907105, 90.41607082790188], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 50
  }).addTo(this.map);
  circle.bindTooltip("Bdcom",{
    permanent: true
});

var polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(this.map);

    //this.getAllPosition();
  }


  logout() {
    sessionStorage.removeItem('accessToken');
      sessionStorage.removeItem('refreshToken');
    localStorage.removeItem('userData');
    sessionStorage.removeItem('rolesData');
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

  goAdmin(){
    console.log(this.check)
    this.check=0;
    clearInterval(this.myInterval);
    console.log(this.check)
    this.router.navigate(['/admin/dashboard']);
  }

  openChangePasswordModal() {
    const dialogCofig = new MatDialogConfig();
    dialogCofig.disableClose = true;
    dialogCofig.width = "600px";
    dialogCofig.height = "480px";
  
    this.dialog.open(ChangepassPopupComponent,  {
      width: '580px',
      height: '460px',
    }).afterClosed()
    .subscribe(response => {});
  }

  openUserProfileModal() {
    const dialogCofig = new MatDialogConfig();
    dialogCofig.disableClose = true;
    dialogCofig.width = "600px";
    dialogCofig.height = "480px";
  
    this.dialog.open(UserprofilePopupComponent,  {
      width: '580px',
      height: '460px',
    }).afterClosed()
    .subscribe(response => {});
  }


}
