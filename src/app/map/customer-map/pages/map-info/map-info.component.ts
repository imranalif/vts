import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { map, tileLayer, animatedMarker, polyline } from 'leaflet';


declare var google



import { Subscription } from 'rxjs';

import * as L from 'leaflet';
import 'leaflet-sidebar';
import 'leaflet-control-bar';
import 'leaflet-easybutton';
import 'leaflet-arrowheads'
import 'esri-leaflet-geocoder'
import 'leaflet-polylinedecorator'
import "leaflet-rotatedmarker";
import * as esri_geo from 'esri-leaflet-geocoder';
import * as ELG from 'esri-leaflet-geocoder';
import * as Geocoding from 'esri-leaflet-geocoder';
import 'leaflet-control-geocoder';
import '/var/projects/angular/VTSApp/angular/node_modules/leaflet.motion/dist/leaflet.motion.min.js';
import '/var/projects/angular/VTSApp/angular/node_modules/leaflet.animatedmarker/src/AnimatedMarker.js';
import { CusmapService } from '../../services/cusmap.service';
import { LoginService } from 'src/app/authentication/login/services/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DeviceService } from 'src/app/admin/devices/services/device.service';
import { DateformateService } from 'src/app/shared/services/dateformate.service';
import { GeofenceService } from 'src/app/admin/geofences/services/geofence.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReportComponent } from '../report/report.component';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-map-info',
  templateUrl: './map-info.component.html',
  styleUrls: ['./map-info.component.scss']
})
export class MapInfoComponent implements OnInit {
  st
  address = "bangladesh"
  public selectedIcon: string;
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
  public myIcon3_online
  public myIcon4_online
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
  fixtimeArray = []
  deviceIdArray = []
  fixtime

  line = []
  marking
  historyItem
  overlayMaps
  m: number;
  check;
  myInterval;
  myTimeout;
  setIntervalOption = 0;
  //////////line drawing
  line1
  line2
  line3
  line4
  line5
  line6

  polyline = []

  public s: boolean = true;
  public h: boolean = false;
  public poiActive: boolean = false;
  public poiInactive: boolean = true;
  public poiStatus: number = 1;

  public geofences;
  public geoActive: boolean = false;
  public geoInactive: boolean = true;
  public geoStatus: number = 1;

  public tailActive: boolean = false;
  public tailInactive: boolean = true;

  polygon
  circle
  public str: string = '1'
  public getStr: string;
  public getStrMap = [];
  public getStrMapF = [];

  public checkValue = 1;
  t

  public poiIcon: number = 1;
  public poiSetStatus: number = 0;

  public preLat;
  public preLng;
  public preLat1;
  public preLng1;

  constructor(
    private mediaObserver: MediaObserver,
    private cusmapService: CusmapService,
    private loginService: LoginService,
    private routing: Router,
    private deviceService: DeviceService,
    private dateFormatService: DateformateService,
    private geofenceService: GeofenceService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,

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
      iconUrl: './assets/client/images/bike.png',
      iconSize: [30, 60],
      iconAnchor: [12, 39],
      color: 'green',
      className: 'icon'

    });

    this.myIcon2 = L.icon({
      iconUrl: './assets/client/images/car2.png',
      iconSize: [40, 50],
      iconAnchor: [12, 39],
      color: 'green',
      className: 'icon'

    });
    this.myIcon3 = L.icon({
      iconUrl: './assets/client/images/car.png',
      iconSize: [30, 50],
      iconAnchor: [15, 33],
      color: 'green',
      className: 'icon',
      markerColor: 'red',
    });
    this.myIcon3_online = L.icon({
      iconUrl: './assets/client/images/car_online.png',
      iconSize: [30, 50],
      iconAnchor: [15, 33],
      color: 'green',
      className: 'icon',
      markerColor: 'red'

    });

    this.myIcon4 = L.icon({
      iconUrl: `./assets/client/images/zip.png`,
      //iconSize: [20, 40],
      iconAnchor: [25, 63],
      color: 'green',
      markerColor: 'red',
      className: 'u-turn-icon'

    })
    this.myIcon4_online = L.icon({
      iconUrl: `./assets/client/images/zip_online.png`,
      //iconSize: [20, 40],
      iconAnchor: [25, 63],
      color: 'green',
      markerColor: 'red',
      className: 'u-turn-icon'

    })


    this.map = L.map('mapid', {
      center: [23.774252395907105, 90.41607082790188],
      zoom: 17,
      zoomControl: false,
      tap: false,
      attributionControl: false
    });

    var openStreet = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

    var googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      center: [33.590241, 130.421222],
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    });

    var googleStreetsTraffic = L.tileLayer('https://{s}.google.com/vt/lyrs=m@221097413,traffic&x={x}&y={y}&z={z}', {
      center: [33.590241, 130.421222],
      maxZoom: 20,
      subdomains: ['mt1', 'mt2', 'mt3']
    });



    var a = openStreet.addTo(this.map);

    var items = L.layerGroup(this.markerArray);
    var layerGroup = L.layerGroup().addTo(this.map);
    var tailsGroup = L.layerGroup().addTo(this.map);
    var layerTooltip = L.layerGroup().addTo(this.map);

    this.baseMaps = {
      "OSM": openStreet,
      "Google Map": googleStreets,

      // "Google traffic": trafficLayer
    }

    this.overlayMaps = {
      "Objects": layerGroup,
      "Tails": tailsGroup,
      // "Traffic": googleStreetsTraffic,
      //"Names": this.names
    };




    // Vehicle Showing on Map
    var data = { id: 1 }
    this.deviceService.getMovingPosition(data).subscribe(res => {

    })



    var layerControl = L.control.layers(this.baseMaps, this.overlayMaps).addTo(this.map);


    this.cusmapService.poiDrawCatch.subscribe(res => {
      var marker
      var iconid = res
      var poi = this.cusmapService;
      function setIcon(e) {
        this.myIcon4 = L.icon({
          iconUrl: `./assets/client/map_icons/${iconid}.png`,
          //iconSize: [20, 40],
          //iconAnchor: [12, 69],
          color: 'green',
          className: 'icon'

        })
        if (marker) {
          layerGroup.removeLayer(marker)
        }
        marker = L.marker([e.latlng.lat, e.latlng.lng], { icon: this.myIcon4 })
        marker.addTo(layerGroup);
        poi.poiLatLngExchange(e.latlng);
      }
      console.log(res, this.poiSetStatus)
      if (res && this.poiSetStatus) {
        this.map.on('click', setIcon);
        ;
      }
      else {
        this.map.off('click');
      }
      //   {
      //     var marker
      //     this.myIcon4 = L.icon({
      //       iconUrl: `./assets/client/map_icons/${1}.png`,
      //       //iconSize: [20, 40],
      //       //iconAnchor: [12, 69],
      //       color: 'green',
      //       className: 'icon'

      //     })
      //     // if(marker){
      //     //   this.map.removeLayer(marker)
      //     // }

      //     marker = L.marker([e.latlng.lat, e.latlng.lng], { icon: this.myIcon4 })
      //     marker.addTo(layerGroup);
      //   });
      // }
    })


    /*============Which layer selected===============*/

    this.map.on('baselayerchange', function (event) {
      if (event.name == "Google Map") {
        layerControl.addOverlay(googleStreetsTraffic, "Traffic");
      }
      else {
        //layerControl.removeOverlay("Parks");
        layerControl.removeLayer(googleStreetsTraffic);

      }
      console.log('Layer name -> ', event.name);
      console.log('Layer URL -> ', event.layer.options.url);
      console.log('Layer attribution -> ', event.layer.options.attribution);
    });

    // Bar start
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
    }).addTo(this.map);
    // Bar end

    var mook = []
    var tooltip = []
    /*============================ Device Move  ====================*/

    this.cusmapService.deviceDataCatch.subscribe(res => {
      if (res) {
        console.log(res)
        clearInterval(this.myInterval);
        this.check = 1;
        if (!this.deviceIdArray.includes(res[0].deviceid)) {
          this.deviceIdArray.push(res[0].deviceid)

          //drawing path with device id
          this.polyline[res[0].deviceid] = L.polyline([]).addTo(this.map);


          if (!this.fixtime) {
            console.log("11111")
            this.fixtime = '2020-08-18T05:42:11.000Z';
            this.fixtime = this.dateFormatService.dateTime('datetime', this.fixtime)
          }
          res[0].fixtime = this.dateFormatService.dateTime('datetime', res[0].fixtime)
          if (this.fixtime < res[0].fixtime) {
            this.fixtime = res[0].fixtime
          }

          //this.fixtime = this.dateFormatService.dateTime('datetime', this.fixtime)
          //var mook
          res.forEach(elem => {
            console.log(elem.category)
            if (elem.category == "motorcycle") {
              this.selectedIcon = this.myIcon
            }
            if (elem.category == "car") {
              this.selectedIcon = this.myIcon3
            }
            if (elem.category == "truck") {
              this.selectedIcon = this.myIcon4
            }
            if (elem.category == "van") {
              this.selectedIcon = this.myIcon4
            }
            mook[elem.deviceid] = L.marker([elem.latitude, elem.longitude], { icon: this.selectedIcon }).bindPopup("<b style='color:blue;margin-right:30px;'>" + elem.name + "</b>" + " <br> Address: " + elem.contact
              + " <br> Model: " + elem.model + " <br> Phone: " + elem.phone + " <br> Type: " + elem.category, { closeOnClick: true, autoClose: false }).bindTooltip(elem.name, {
                direction: 'left', offset: [15, -45], permanent: false
              }).addTo(this.map);

            //var popup = L.popup().setContent('<a class="click" href="#">click</a>');
            // mook[elem.deviceid] = L.marker([elem.latitude, elem.longitude], { icon: this.myIcon3 }).bindPopup(popup).bindTooltip(elem.name, {
            //     direction: 'left', offset: [15, -45], permanent: true
            // }).addTo(this.map)
            layerGroup.addLayer(mook[elem.deviceid]);
            var b = mook[elem.deviceid].on('click', onMarkerClick);
            var ad
            var m = this.map
            const v = L.Control.Geocoder.nominatim();
            function onMarkerClick(e) {
              console.log(e)
              console.log(e.target._tooltip._content)
              var popup = e.target.getPopup();
              var latlng = { lat: e.latlng.lat, lng: e.latlng.lng }
              //               var latlng = [ e.latlng.lat,  e.latlng.lng ]
              //               var apiKey='AAPK616d40cd2fd04e28bdb7726503ac72ea8FeMtiwl59-umVwWgmWtHlBI8Qndmb0f0e83JbGN_fGsQ071sxlD95KeJMdbIRoX'
              //               new ELG.ReverseGeocode({apikey: apiKey}).latlng(latlng).run((error,result)=>{
              //                 if(error){
              //                   console.log(error)
              //                   return
              //                 }

              // console.log(result.address.Match_addr);
              //               })
              v.reverse(latlng, m.options.crs.scale(m.getZoom()), results => {
                if (results[0]) {
                  ad = results[0].name
                  popup.setContent("Address :  " + ad, { closeOnClick: false, autoClose: false });
                  popup.update();

                }
              })
            }
          })
        }

        // this.deviceIdArray.forEach(element => {
        //   this.polyline[element]= L.polyline([]).addTo(this.map);
        // });
        this.myInterval = setInterval(() => {
          var checkDevice = 11;
          this.fixtime = this.dateFormatService.dateTime('datetime', this.fixtime)
          var data = { id: this.deviceIdArray, fixtime: this.fixtime }
          if (this.check == 1) {
            this.deviceService.getMovingPosition(data).subscribe(data => {
              data.forEach(element => {

                if (checkDevice != element.deviceid) {

                  checkDevice = element.deviceid;
                  var myTimeoutt;
                  if (element.protocol == 'teltonika') {
                    this.st = 1;
                    //console.log(element);
                    this.fixtime = element.fixtime;
                    this.cusmapService.deviceDetails(element);
                    var attribute = JSON.parse(element.attributes);

                    // if(attribute.ignition==true){
                    //   this.openSnackBar();
                    // }
                    console.log("testing============")

                    if (element.speed != 0) {
                      mook[element.deviceid].setIcon(this.myIcon3_online);
                    }
                    else {
                      mook[element.deviceid].setIcon(this.myIcon3);
                    }

                    mook[element.deviceid].setRotationAngle(element.course / 2);
                    //mook[element.deviceid].setRotationOrigin(element.course);

                    const lt = (element.latitude - mook[element.deviceid].getLatLng().lat) / 20;
                    const ln = (element.longitude - mook[element.deviceid].getLatLng().lng) / 20;
                    var i = 0;
                    myTimeoutt = setInterval(() => {
                      i = i + 1;
                      var newLat = mook[element.deviceid].getLatLng().lat + lt;
                      var newLng = mook[element.deviceid].getLatLng().lng + ln;
                      li = this.polyline[element.deviceid].addLatLng(L.latLng(newLat, newLng))
                      tailsGroup.addLayer(li);
                      //.arrowheads({ size: '10px', color: 'red', frequency: 'endonly' });

                      let latlngs = this.polyline[element.deviceid].getLatLngs();

                      if (latlngs.length > 100) {
                        latlngs = latlngs.slice(20, 120);
                        li = this.polyline[element.deviceid].setLatLngs(latlngs);
                        tailsGroup.addLayer(li);
                      }
                      this.marker = mook[element.deviceid].setLatLng([newLat, newLng]).update().bindPopup("Name:" + " <br> Address: " + test(element.latitude) + element.latitude + "," + element.longitude
                      + " <br> Time: " + element.fixtime + " <br> Satellite: " + attribute.sat + " <br> Ignition: " + attribute.ignition + " <br> Motion: " + attribute.motion, { closeOnClick: false, autoClose: false });

                      if (i >= 20) {
                        clearTimeout(myTimeoutt);
                      }
                      //this.line3 = this.polyline[element.deviceid].addLatLng(L.latLng(newLat, newLng));
                    }, 240);


                    //"<p onclick='this.innerHTML=" + b + "'>Click me</p>"
                    // element.latitude=element.latitude.toFixed(14);
                    // element.longitude=element.longitude.toFixed(14);
                    // this.marker = mook[element.deviceid].setLatLng([element.latitude, element.longitude], { animate: true, duration: 5000, color: 'red' }).bindPopup("Address :  " +this.address+ " <br> Address: "+  element.latitude + "," + element.longitude
                    //   + " <br> Time: " + element.fixtime + " <br> Satellite: " + attribute.sat + " <br> Ignition: " + attribute.ignition + " <br> Motion: " + attribute.motion, { closeOnClick: false, autoClose: false });
                    // li = this.polyline[element.deviceid].addLatLng(L.latLng(element.latitude, element.longitude));
                    // tailsGroup.addLayer(li);
                    // let latlngs = this.polyline[element.deviceid].getLatLngs();
                    //   if (latlngs.length > 10) {
                    //     latlngs = latlngs.slice(1, 11);
                    //     li = this.polyline[element.deviceid].setLatLngs(latlngs);
                    //     tailsGroup.addLayer(li);
                    //   }



                  }
                  else {

                    if (element.speed != 0) {
                      mook[element.deviceid].setIcon(this.myIcon4_online);
                    }
                    else {
                      mook[element.deviceid].setIcon(this.myIcon4);
                    }
                    this.fixtime = element.fixtime;
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
                    var attribute = JSON.parse(element.attributes)
                    //var popup = L.popup().setContent('<a class="click" href="#">click</a>');
                    // this.marker = mook[element.deviceid].setLatLng([element.latitude+.15, element.longitude], {"animate": true,duration: 0.5,color:'red'}).bindPopup("Name:" + " <br> Address: " + element.latitude+","+element.longitude
                    //   + " <br> Time: " + element.fixtime + " <br> Satellite: " + attribute.sat + " <br> Ignition: " + attribute.ignition+ " <br> Motion: " + attribute.motion, { closeOnClick: false, autoClose: false })
                    console.log(element.latitude, element.longitude, mook[element.deviceid].getLatLng().lat, mook[element.deviceid].getLatLng().lng)
                    const lt = (element.latitude - mook[element.deviceid].getLatLng().lat) / 20;
                    const ln = (element.longitude - mook[element.deviceid].getLatLng().lng) / 20;
                    // this.marker = mook[element.deviceid].setLatLng([element.latitude, element.longitude], { animate: true, duration: 5000, color: 'red' }).bindPopup("Name:" + " <br> Address: " + element.latitude + "," + element.longitude
                    //   + " <br> Time: " + element.fixtime + " <br> Satellite: " + attribute.sat + " <br> Ignition: " + attribute.ignition + " <br> Motion: " + attribute.motion, { closeOnClick: false, autoClose: false });

                    var polyline = []
                    polyline[element.deviceid] = L.polyline([], {
                      weight: 3,
                      color: element.deviceid === 1 ? 'red' : 'blue',
                      opacity: 0.5
                    }).addTo(this.map);
                    var li
                    //this.line3 = this.polyline[element.deviceid].addLatLng(L.latLng(element.latitude, element.longitude));
                    var i = 0;
                    // function move() {
                    //   i = i + 1;
                    //   var newLat = mook[element.deviceid].getLatLng().lat + lt;
                    //   var newLng = mook[element.deviceid].getLatLng().lng + ln;
                    //   li = polyline[element.deviceid].addLatLng(L.latLng(newLat, newLng));

                    //   this.marker = mook[element.deviceid].setLatLng([newLat, newLng], { animate: true, duration: 5000, color: 'red' }).bindPopup("Name:" + " <br> Address: " + element.latitude + "," + element.longitude
                    //     + " <br> Time: " + element.fixtime + " <br> Satellite: " + attribute.sat + " <br> Ignition: " + attribute.ignition + " <br> Motion: " + attribute.motion, { closeOnClick: false, autoClose: false });

                    //   if (i == 100) {
                    //     clearTimeout(myTimeout);
                    //   }
                    //   //this.line3 = this.polyline[element.deviceid].addLatLng(L.latLng(newLat, newLng));
                    // }



                    var myTimeoutt
                    myTimeoutt = setInterval(() => {
                      i = i + 1;
                      var newLat = mook[element.deviceid].getLatLng().lat + lt;
                      var newLng = mook[element.deviceid].getLatLng().lng + ln;
                      li = this.polyline[element.deviceid].addLatLng(L.latLng(newLat, newLng))
                      tailsGroup.addLayer(li);
                      //.arrowheads({ size: '10px', color: 'red', frequency: 'endonly' });

                      let latlngs = this.polyline[element.deviceid].getLatLngs();

                      if (latlngs.length > 100) {
                        latlngs = latlngs.slice(20, 120);
                        li = this.polyline[element.deviceid].setLatLngs(latlngs);
                        tailsGroup.addLayer(li);
                      }

                      this.marker = mook[element.deviceid].setLatLng([newLat, newLng]).update().bindPopup("Name:" + " <br> Address: " + test(element.latitude) + element.latitude + "," + element.longitude
                        + " <br> Time: " + element.fixtime + " <br> Satellite: " + attribute.sat + " <br> Ignition: " + attribute.ignition + " <br> Motion: " + attribute.motion, { closeOnClick: false, autoClose: false });

                      if (i == 20) {
                        clearTimeout(myTimeoutt);
                      }
                      //this.line3 = this.polyline[element.deviceid].addLatLng(L.latLng(newLat, newLng));
                    }, 250);


                    //const myTimeout = setInterval(move, 50);

                    //               var line = L.polyline([[mook[element.deviceid].getLatLng().lat, mook[element.deviceid].getLatLng().lng],[element.latitude, element.longitude]]),
                    //      animatedMarker = L.animatedMarker(line.getLatLngs(),{
                    //       icon: this.myIcon3
                    //     });
                    // this.map.addLayer(animatedMarker);

                    // lineArray[element.deviceid]=lineArray1.push([element.latitude, element.longitude]);
                    //this.line[element.deviceid] = L.polyline( [element.latitude, element.longitude], {color: 'red', clickable: 'true'}).addTo(this.map);
                    // this.line=L.polyline( lineArray, {color: 'red', clickable: 'true'}).addTo(this.map);
                    //if (element) {
                    //this.line[element.deviceid] = polyline.addLatLng(L.latLng(element.latitude, element.longitude)).arrowheads({ size: '10px', color: 'red', frequency: 'endonly' });
                    //this.line[element.deviceid] = L.polyline([element.latitude, element.longitude], {color: 'red', clickable: 'true'}).addTo(this.map);;
                    //                 var animatedMarker = L.animatedMarker(this.line[element.deviceid].getLatLngs());
                    // this.map.addLayer(animatedMarker);

                    //}

                  }
                }
              }
              )
            })
          }
        }, 5 * 1000)
      }
    })

    function test(e) {

    }

    /*============================ Device remoce from map  ====================*/

    this.cusmapService.deviceRemoveFromMap.subscribe(data => {
      if (data) {
        // this.check = 0;

        // clearInterval(this.myInterval);
        //console.log(this.markerArray)
        data.forEach(element => {
          if (element.deviceid) {
            element.id = element.deviceid
          }
          this.deviceIdArray = this.deviceIdArray.filter(item => item !== element.id)
          console.log(element.id)
          this.map.removeLayer(mook[element.id])
          if (this.polyline[element.id]) {
            this.map.removeLayer(this.polyline[element.id])
          }

        })

        if (this.deviceIdArray.length <= 0) {
          this.check = 0;
          clearInterval(this.myInterval);
        }
      }
    })

    this.cusmapService.deviceLocationCatch.subscribe(res => {
      if (res) {
        //this.map.panTo(new L.LatLng(res[0].latitude, res[0].longitude));
        this.map.flyTo([res[0].latitude, res[0].longitude], 17, { duration: 1 });
      }
    })
    this.cusmapService.detailsDataCatch.subscribe(res => {
      if (res) {
        controlBar.show();
      }
    })

    /*============================ Events  ====================*/

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

    /*============================ Device History  ====================*/

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
        this.storeLatlng = [];
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
              this.park = L.marker([element.latitude, element.longitude], { icon: this.myIcon2 }).bindPopup(element.deviceid + " <br> Address: " + address
                + " <br> Latitude: " + element.latitude + " <br> Longitude: " + element.longitude + " <br> Servertime: " + element.servertime + " <br> Altitude: " + element.altitude + " <br> Speed: " + element.speed, { closeOnClick: false, autoClose: false }).openPopup().addTo(this.map);
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
          if (this.parking) {
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

        if (this.history) {
          this.map.removeLayer(this.history);
        }

        //controlBar.show();
        this.map.addLayer(layerGroup)
        this.historyBar.hide();
      }
    })

    this.cusmapService.trafficCatch.subscribe(res => {
      console.log(res)
      if (res == 1) {
        this.t = googleStreetsTraffic.addTo(this.map);
      }
    })

    /*=====================POI===============================*/
    var poimarker = [];
    var poiMarkerGroup;
    this.cusmapService.poiCatch.subscribe(res => {
      console.log(res)
      if (res) {
        this.poiSetStatus = 1;
        res.forEach(element => {
          var poiIcon = L.icon({
            iconUrl: `./assets/client/map_icons/${element.icon_id}.png`,
            //iconSize: [20, 40],
            iconAnchor: [0, 0],
            color: 'green',
            className: 'icon'

          });
          var coordinates = JSON.parse(element.coordinates);

          var poi = L.marker([coordinates.lat, coordinates.lng], { icon: poiIcon })
            .bindTooltip(element.name);
          poimarker.push(poi);
          // layerGroup.addLayer(poimarker[element.icon_id]);

        })
        poiMarkerGroup = L.layerGroup(poimarker);
        poiMarkerGroup.addTo(this.map);
      }
    })

    this.cusmapService.poiRemoveCatch.subscribe(res => {
      if (res) {
        console.log(res)
        this.map.removeLayer(poiMarkerGroup);
        this.poiSetStatus = 0;
      }
    })

    // this.map.on('click', function(e){
    //   var coord = e.latlng;
    //   var lat = coord.lat;
    //   var lng = coord.lng;
    //   var poi = L.marker([lat, lng], { icon: this.myIcon3 });
    //   poiMarkerGroup = L.layerGroup(poi);
    //   poiMarkerGroup.addTo(this.map);

    //   console.log("You clicked the map at latitude: " + lat + " and longitude: " + lng);
    //   });
    /*=====================Geofence===============================*/

    var geofenceGroup;
    this.cusmapService.geofenceCatch.subscribe(res => {
      if (res) {
        var geofence = [];
        res.forEach(el => {
          this.getStr = el.area;
          console.log(el)
          this.getStrMap = this.getStr.split(/[,()]/);
          console.log(this.getStrMap[0].trim())

          if (this.getStrMap[0].trim() == "POLYGON") {
            this.getStrMap = this.getStrMap.slice(1, -1);
            this.getStrMap.forEach(e => {
              e = e.split(' ').join(',');
              var array = e.split(',');
              var lati = parseFloat(array[0]);
              var lngi = parseFloat(array[1]);
              this.getStrMapF.push([lati, lngi])
            })
            //console.log(this.getStrMap.split(' ').join(''))

            var polygon = L.polygon(this.getStrMapF).bindTooltip(el.name,
              { permanent: true, direction: "right" }
            ).openTooltip();;
            geofence.push(polygon);
            // this.polygon.addTo(this.map);
          }

          if (this.getStrMap[0].trim() == "CIRCLE") {
            this.getStrMap = this.getStrMap.slice(1, -1);
            var e = this.getStrMap[0].split(' ').join(',')
            var array = e.split(',');
            var lat = parseFloat(array[0]);
            var lng = parseFloat(array[1]);
            var radi = parseFloat(this.getStrMap[1])


            var circle = L.circle([lat, lng], {
              color: '#68e05b',
              fillColor: '#bbefcb',
              fillOpacity: 0.5,
              radius: radi
            }).bindTooltip(el.name,
              { permanent: true, direction: "right" }
            ).openTooltip();
            geofence.push(circle);


          }

        })
        geofenceGroup = L.layerGroup(geofence);
        geofenceGroup.addTo(this.map);
      }

    })

    this.cusmapService.geofenceRemoveCatch.subscribe(res => {
      if (res) {

        this.map.removeLayer(geofenceGroup);

      }
    })

  }



  public traffic(e): void {
    console.log(e);
    this.cusmapService.trafficExchange(e);
    this.checkValue = 2;
  }
  public geofence(event): void {
    if (event == 1) {
      this.geoActive = true
      this.geoInactive = false;
      this.geofenceService.getAllGeofence().subscribe(res => {
        this.cusmapService.geofenceExchange(res);
        this.geofences = res;
      })
      this.geoStatus = 2;
    }
    else {
      this.geoActive = false
      this.geoInactive = true;
      var gf = 1
      this.cusmapService.geofenceRemoveExchange(gf);
      this.geoStatus = 1;
    }

  }
  public getAllPoi(e): void {
    if (e == 1) {
      this.poiActive = true;
      this.poiInactive = false;
      this.deviceService.getAllPois().subscribe(res => {
        this.cusmapService.poiExchange(res);
      })
      this.poiStatus = 2;
    }

    else {
      var data = 1;
      this.poiActive = false;
      this.poiInactive = true;
      this.cusmapService.poiRemoveExchange(data);
      this.poiStatus = 1;
    }

  }

  public goAlertTab(): void {
    var geoTab = 3
    this.cusmapService.geoTabDataExchange(geoTab);
  }

  public goPoiTab(): void {
    var poiTab = 6
    this.cusmapService.poiTabExchange(poiTab);
  }


  public goGeofenceTab(i): void {
    var geoTab = i
    this.cusmapService.geoTabDataExchange(geoTab);
  }

  openSnackBar(): void {
    this.snackBar.open('Successfully added!!', 'Close', {
      duration: 5000,
      verticalPosition: 'bottom',
      horizontalPosition: 'end',
    });
  }

  public openReportModal(): void {
    const dialogCofig = new MatDialogConfig();
    dialogCofig.disableClose = true;
    dialogCofig.width = "800px";
    dialogCofig.height = "580px";

    this.dialog.open(ReportComponent, {

      width: '800px',
      height: '560px',

    }).afterClosed()
      .subscribe(response => { });
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
