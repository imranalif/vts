import { Component, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';

import { Subscription } from 'rxjs';

import * as L from 'leaflet';
import 'leaflet-sidebar';
import 'leaflet-control-bar';
import 'leaflet-easybutton';
import 'leaflet-arrowheads'
import 'esri-leaflet-geocoder'
import * as esri_geo from 'esri-leaflet-geocoder';
import * as ELG from 'esri-leaflet-geocoder';
import * as Geocoding from 'esri-leaflet-geocoder';
import 'leaflet-control-geocoder';
import '/var/projects/angular/VTSApp/angular/node_modules/leaflet.motion/dist/leaflet.motion.min.js';
import { CusmapService } from '../../services/cusmap.service';
import { LoginService } from 'src/app/authentication/login/services/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DeviceService } from 'src/app/admin/devices/services/device.service';
import { DateformateService } from 'src/app/shared/services/dateformate.service';

@Component({
  selector: 'app-map-info',
  templateUrl: './map-info.component.html',
  styleUrls: ['./map-info.component.scss']
})
export class MapInfoComponent implements OnInit {
  baseMaps
  map
  historyBar
  devices = []
  mediaSub: Subscription;
  deviceXs: boolean;
  myIcon
  myIcon2
  myIcon4
  myIcon3: string;
  marker = []
  markerArray = []

  positions
  route
  engine
  engineArray = []
  arrow
  park
  parkArray = []
  parking
  history
  storeLatlng = []
  polylineMotion
  timeArray = []
  fixtimeArray=[]
  deviceIdArray = []
  fixtime

  line=[]
  marking
  historyItem
  overlayMaps
  m: number;
  check;
  myInterval
  setIntervalOption=0;
  //////////line drawing
  line1
  line2
  line3
  line4
  line5
  line6

   polyline=[]

  constructor(
    private mediaObserver: MediaObserver,
    private cusmapService: CusmapService,
    private loginService: LoginService,
    private routing: Router,
    private deviceService: DeviceService,
    private dateFormatService: DateformateService

  ) { }

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
    var items = L.layerGroup(this.markerArray);

    var layerGroup = L.layerGroup().addTo(this.map);

    this.baseMaps = {
      "OSM": openStreet,
      "Google Map": googleStreets
    }

    this.overlayMaps = {
      "Objects": layerGroup

      //"Names": this.names
    };


    // Vehicle Showing on Map
    var data = { id: 1 }
    this.deviceService.getMovingPosition(data).subscribe(res => {
      console.log(res)
    })



    L.control.layers(this.baseMaps, this.overlayMaps).addTo(this.map);

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
    var myButton = L.easyButton('fa-exchange', function (btn, map) {
      controlBar.toggle()
    }, { position: 'bottomright' }).addTo(this.map);

    this.historyBar = L.control.bar('history', {
      position: 'bottom',
      visible: false
    }).addTo(this.map);;



    var mook = []
    var line=[1,4,5,6,7,8]
    var lineArray={}
    var lineArray1=[]
    var lineArray2=[]
    var lineArray3=[]
    var lineArray4=[]
    var lineArray5=[]
   
    
    this.cusmapService.deviceDataCatch.subscribe(res => {
      if (res) {
        console.log(res)
        clearInterval(this.myInterval);
        this.check = 1;
        if (!this.deviceIdArray.includes(res[0].deviceid)) {
          this.deviceIdArray.push(res[0].deviceid)

          if(!this.fixtime){
            console.log("11111")
            this.fixtime='2020-08-18T05:42:11.000Z';
            this.fixtime = this.dateFormatService.dateTime('datetime', this.fixtime)
          }
          res[0].fixtime = this.dateFormatService.dateTime('datetime', res[0].fixtime)
          if(this.fixtime < res[0].fixtime){
            this.fixtime = res[0].fixtime
          }
          
          //this.fixtime = this.dateFormatService.dateTime('datetime', this.fixtime)
          //var mook
          res.forEach(elem => {
            mook[elem.deviceid] = L.marker([elem.latitude, elem.longitude], { icon: this.myIcon3 }).bindPopup(elem.name + " <br> Address: " + elem.contact
              + " <br> Model: " + elem.model + " <br> Phone: " + elem.phone + " <br> Type: " + elem.category, { closeOnClick: true, autoClose: false }).bindTooltip(elem.name, {
                direction: 'left', offset: [15, -45], permanent: true
            }).addTo(this.map)
            layerGroup.addLayer(mook[elem.deviceid]);
          })
        }
        
        this.deviceIdArray.forEach(element => {
          this.polyline[element]= L.polyline([]).addTo(this.map);
        });

        
      
        this.myInterval = setInterval(() => {
          
          this.fixtime = this.dateFormatService.dateTime('datetime', this.fixtime)
          var data = { id: this.deviceIdArray, fixtime: this.fixtime }
          if (this.check == 1) {
            this.deviceService.getMovingPosition(data).subscribe(data => {
              data.forEach(element => {
                this.fixtime = element.fixtime;
                console.log(this.fixtime)
                this.cusmapService.deviceDetails(element);
                // var latlng = { lat: element.latitude, lng: element.longitude }
                // const v = L.Control.Geocoder.nominatim();
                // v.reverse(latlng, this.map.options.crs.scale(this.map.getZoom()), results => {
                //   element.address = (results[0].name)
                //    console.log(element.name)
                //   this.cusmapService.detailsDataExchange(element);
                // })


               

                var marker
                //var marker= L.marker([0,0],{icon:this.myIcon3}).addTo(this.map);
                var markers = L.layerGroup()
                this.markerArray = L.layerGroup()
                console.log(element.name)
                var attribute=JSON.parse(element.attributes)
                this.marker = mook[element.deviceid].setLatLng([element.latitude, element.longitude], {"animate": true,duration: 0.5,color:'red'}).bindPopup("Name:" + " <br> Address: " + element.latitude+","+element.longitude
                  + " <br> Time: " + element.fixtime + " <br> Satellite: " + attribute.sat + " <br> Ignition: " + attribute.ignition+ " <br> Motion: " + attribute.motion, { closeOnClick: false, autoClose: false })
                 

                
                  this.line3 = this.polyline[element.deviceid].addLatLng(L.latLng(element.latitude, element.longitude));
                  // lineArray[element.deviceid]=lineArray1.push([element.latitude, element.longitude]);
                   //this.line[element.deviceid] = L.polyline( [element.latitude, element.longitude], {color: 'red', clickable: 'true'}).addTo(this.map);

                  // if(1==element.deviceid){
                  //   this.line1 = polyline.addLatLng(L.latLng(element.latitude, element.longitude));
                  //   //lineArray.push([element.latitude, element.longitude])
                  // }
                  // if(4==element.deviceid){
                  //   this.line2 = polyline.addLatLng(L.latLng(element.latitude, element.longitude));
                  // }
                  // if(5==element.deviceid){
                  //   this.line3 = polyline.addLatLng(L.latLng(element.latitude, element.longitude));
                  // }
                  // if(6==element.deviceid){
                  //   // this.line4 = polyline.addLatLng(L.latLng(element.latitude, element.longitude));
                  //   lineArray3.push([element.latitude, element.longitude])
                  // }
                  // if(7==element.deviceid){
                  //   this.line5 = polyline.addLatLng(L.latLng(element.latitude, element.longitude));
                  // }
                  // if(8==element.deviceid){
                  //   this.line6 = polyline.addLatLng(L.latLng(element.latitude, element.longitude));
                  // }

                 
    
                  // this.line=L.polyline( lineArray, {color: 'red', clickable: 'true'}).addTo(this.map);
                  // line[1]=L.polyline( lineArray1, {color: 'blue', clickable: 'true'}).addTo(this.map);
                  // line[2]=L.polyline( lineArray2, {color: 'green', clickable: 'true'}).addTo(this.map);
                  // line[3]=L.polyline( lineArray3, {color: 'brown', clickable: 'true'}).addTo(this.map);
                  // line[4]=L.polyline( lineArray4, {color: 'purple', clickable: 'true'}).addTo(this.map);
                  // line[5]=L.polyline( lineArray5, {color: 'orange', clickable: 'true'}).addTo(this.map);
                //if (element) {
                  
                  //this.line[element.deviceid] = polyline.addLatLng(L.latLng(element.latitude, element.longitude)).arrowheads({ size: '10px', color: 'red', frequency: 'endonly' });
                  //this.line[element.deviceid] = L.polyline([element.latitude, element.longitude], {color: 'red', clickable: 'true'}).addTo(this.map);;
  //                 var animatedMarker = L.animatedMarker(this.line[element.deviceid].getLatLngs());
	// this.map.addLayer(animatedMarker);

                //}

              })
            })
          }
        }, 5 * 1000)
      }
    })

    this.cusmapService.deviceRemoveFromMap.subscribe(data => {
      if (data) {
        // this.check = 0;

        // clearInterval(this.myInterval);
        //console.log(this.markerArray)
        data.forEach(element => {
          if(element.deviceid){
            element.id=element.deviceid
          }
          this.deviceIdArray = this.deviceIdArray.filter(item => item !== element.id)
          console.log(element.id)
          this.map.removeLayer(mook[element.id])
          if(this.polyline[element.id]){
          this.map.removeLayer(this.polyline[element.id])
        }

        })

        if (this.deviceIdArray.length <= 0) {
          console.log("check")
          this.check = 0;
          clearInterval(this.myInterval);
        }
      }
    })

    this.cusmapService.deviceLocationCatch.subscribe(res => {
      if (res) {
        this.map.panTo(new L.LatLng(res[0].latitude, res[0].longitude));
      }
    })
    this.cusmapService.detailsDataCatch.subscribe(res => {
      if (res) {
        controlBar.show();
      }})

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

    this.cusmapService.deviceHistoryCatch.subscribe(res => {
      console.log(res)
      if (res) {
        // myButton.disable();
        this.map.removeLayer(layerGroup)
        controlBar.hide();
        this.historyBar.show();

        //this.viewHistory=1
        var polyline = L.polyline([]).addTo(this.map);
        this.positions = res;
        this.storeLatlng=[];
        if (this.positions != "") {
          this.map.setView(new L.LatLng(this.positions[0].latitude, this.positions[0].longitude), 13);
          this.positions.forEach((element, i) => {
            
            let expireTime = new Date(element.servertime);
            let fixTime = new Date(element.fixtime);
            this.timeArray.push(expireTime)
            this.fixtimeArray.push(fixTime)
            var time = (this.timeArray[i] - this.fixtimeArray[i]) / (1000 * 60);

            if (time > 20) {
              this.engine = L.marker([element.latitude, element.longitude], { icon: this.myIcon }).bindPopup(element.deviceid + " <br> Address: " + element.latitude
                + " <br> Model: " + element.longitude + " <br> Servertime: " + element.servertime + " <br> Speed: " + element.speed + " <br> Power: " + element.course, { closeOnClick: false, autoClose: false }).openPopup();
              this.engineArray.push(this.engine)
              this.history = L.layerGroup(this.engineArray);
            }
           var address
            if (time < 20 && time > 5) {
              this.park = L.marker([element.latitude, element.longitude], { icon: this.myIcon2 }).bindPopup(element.deviceid + " <br> Address: "  + address
              + " <br> Latitude: " + element.latitude + " <br> Longitude: " + element.longitude + " <br> Servertime: " + element.servertime + " <br> Altitude: " + element.altitude + " <br> Speed: " + element.speed , { closeOnClick: false, autoClose: false }).openPopup().addTo(this.map);
              this.parkArray.push(this.park)
              this.parking = L.layerGroup(this.parkArray);
            }
            this.route = polyline.addLatLng(L.latLng(element.latitude, element.longitude));

            this.arrow = this.route.arrowheads({ size: '12px', color: 'red', yawn: 40, frequency: 10 });
            //this.marker.setLatLng([element.latitude,element.longitude]).bindTooltip("Loc:"+element.latitude+", "+element.longitude).addTo(this.map);
           
            this.storeLatlng.push([element.latitude, element.longitude])

          });

          //this.parking.addTo(this.map)
          this.overlayMaps = {
            "Route": this.route,
            "Engine": this.history,

            "Parking": this.parking,

          };
          //L.control.layers(this.baseMaps,this.overlayMaps).addTo(this.map);
          if(this.parking){
            this.parking.addTo(this.map)
          }
          
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
      }
    })

    this.cusmapService.deviceMoveCatch.subscribe(res => {
      if (res) {
        this.polylineMotion.motionStart();
      }
    })

    this.cusmapService.deviceToggleCatch.subscribe(res => {
      if (res) {
        this.polylineMotion.motionToggle();
      }
    })

    this.cusmapService.motionConCatch.subscribe(res => {
      if (res) {
        console.log(res)
        this.polylineMotion.motionSpeed(res);
      }
    })

    this.cusmapService.motionStoponCatch.subscribe(res => {
      if (res) {
        this.polylineMotion.motionStop();
      }
    })

    this.cusmapService.tabIndexCatch.subscribe(res => {
      if (res) {
        this.map.setView(new L.LatLng(23.774252395907105, 90.41607082790188), 17);
        // if (this.marker.length > 0) {
        //   this.map.addLayer(this.marker);
        // }
        if (this.route) {
          this.map.removeLayer(this.route);
        }
        if (this.parking) {
          this.map.removeLayer(this.parking);
        }

        if(this.history){
          this.map.removeLayer(this.history);
        }

        //controlBar.show();
        this.map.addLayer(layerGroup)
        this.historyBar.hide();
      }
    })


  }



  logout() {
    this.loginService.logout().subscribe(res => {
      this.check = 0;
      sessionStorage.removeItem('accessToken');
      sessionStorage.removeItem('refreshToken');
      this.routing.navigate(['/']);
    })

  }

}
