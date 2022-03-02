import { Component, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';

import * as L from 'leaflet';
import 'leaflet-sidebar';
import 'leaflet-easybutton';
import 'leaflet-control-bar';
import 'leaflet-arrowheads'

import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/authentication/login/services/login.service';
import { ResellermapService } from '../../services/resellermap.service';
import { DateformateService } from 'src/app/shared/services/dateformate.service';
import { DeviceService } from 'src/app/admin/devices/services/device.service';
import { CusmapService } from 'src/app/map/customer-map/services/cusmap.service';
import '/var/projects/angular/VTSApp/angular/node_modules/leaflet.motion/dist/leaflet.motion.min.js';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit {
  historyBar
  map
  mediaSub: Subscription;
  deviceXs: boolean;
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
  constructor( 
    private mediaObserver: MediaObserver,
    private router:Router,
    private loginService:LoginService,
    private resellermapService: ResellermapService,
    private dateFormatService: DateformateService,
    private deviceService: DeviceService,
    private cusmapService:CusmapService) { }

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

    var googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      center: [33.590241, 130.421222],
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    });

    openStreet.addTo(this.map);
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


/*--------------------------Sidebar bottombar--------------------*/
    var sidebar = L.control.sidebar('sidebar').addTo(this.map);
    sidebar.show();
    L.easyButton('fa-exchange', function (btn, map) {
      sidebar.toggle()
    }).addTo(this.map);
    var controlBar = L.control.bar('menu', {
      position: 'bottom',
      visible: false
    }).addTo(this.map);;
    controlBar.hide();
    //this.controlBar.toggle()
    var myButton = L.easyButton('fa-exchange', function (btn, map) {
      controlBar.toggle()
    }, { position: 'bottomright' }).addTo(this.map);

    this.historyBar = L.control.bar('history', {
      position: 'bottom',
      visible: false
    }).addTo(this.map);
    /*--------------------------Sidebar bottombar end--------------------*/

    /*--------------------------Device show on map--------------------*/
    var mapDevice = []
    var pai = L.layerGroup()
    this.resellermapService.movingDataCatch.subscribe(res => {
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
        this.myInterval = setInterval(() => {
          this.fixtime = this.dateFormatService.dateTime('datetime', this.fixtime)
          var data = { id: this.deviceIdArray, fixtime: this.fixtime }
          console.log(this.check)
          if (this.check == 1) {
            this.deviceService.getMovingPosition(data).subscribe(data => {
              data.forEach(element => {
                this.fixtime = element.fixtime;
                var marker
                var markers = L.layerGroup()
                this.markerArray = L.layerGroup()
                this.marker = mapDevice[element.deviceid].setLatLng([element.latitude, element.longitude]).bindPopup(element.name + " <br> Address: " + element.contact
                  + " <br> Model: " + element.model + " <br> Phone: " + element.phone + " <br> Type: " + element.category, { closeOnClick: false, autoClose: false })
                  this.line = this.polyline[element.deviceid].addLatLng(L.latLng(element.latitude, element.longitude)).arrowheads({ size: '10px', color: 'red', frequency: 'endonly' });
              })
            })
          }
        }, 5 * 1000)}
      })

/*--------------------------Device remove from map--------------------*/
      this.resellermapService.remove.subscribe(res => {
        if (res) {
          console.log(res)
          res.forEach(element => {
            this.deviceIdArray = this.deviceIdArray.filter(item => item !== element.id)
            console.log(element.id)
            this.map.removeLayer(mapDevice[element.id])
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

      /*--------------------------Device History on map--------------------*/

      this.resellermapService.historyData.subscribe(res => {
        console.log(res.length)
        if (res.length > 0) {
          this.map.removeLayer(layerGroup)
          controlBar.hide();
          this.historyBar.show();
          this.viewHistory = 1
          var polyline = L.polyline([]).addTo(this.map);
          this.positions = res;
          this.storeLatlng = [];
          this.map.setView(new L.LatLng(this.positions[0].latitude, this.positions[0].longitude), 13);
          this.positions.forEach((element, i) => {
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
            
            this.route = polyline.addLatLng(L.latLng(element.latitude, element.longitude));
            this.arrow = this.route.arrowheads({ size: '10px', color: 'red', yawn: 40, frequency: 10 });
            this.storeLatlng.push([element.latitude, element.longitude])
  
          });
         
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
  
      this.resellermapService.startDevice.subscribe(res => {
        if (res) {
          this.polylineMotion.motionStart();
        }
      })
      this.resellermapService.toggleDevice.subscribe(res => {
        if (res) {
          this.polylineMotion.motionToggle();
        }
      })
  
  /*--------------------------Change tab on Sidebar--------------------*/

      this.resellermapService.indexDetailsView.subscribe(res => {
        console.log(res)
        if (res) {
          this.map.setView(new L.LatLng(23.774252395907105, 90.41607082790188), 17);
          if (this.route) {
            this.map.removeLayer(this.route);
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
          this.historyBar.hide();
        }
      })

      /*--------------------------eventInfomation showing--------------------*/

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

     /*--------------------------center position--------------------*/

    this.resellermapService.s.subscribe(res => {
      if (res) {
        controlBar.show();
        this.map.panTo(new L.LatLng(res[0].latitude, res[0].longitude));
      }
    })
  
  }

  

  logout(){
    this.loginService.logout().subscribe(res=>{
      sessionStorage.removeItem('accessToken');
      sessionStorage.removeItem('refreshToken');
      localStorage.removeItem('userData');
      sessionStorage.removeItem('rolesData');
      this.router.navigate(['/']);
    })
  }
  goReseller(){
    this.router.navigate(['/reseller/dashboard']);
  }

}
