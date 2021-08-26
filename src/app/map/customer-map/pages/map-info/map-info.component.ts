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

  line
  marking

  m: number;
  check;
  myInterval

  constructor(
    private mediaObserver: MediaObserver,
    private cusmapService: CusmapService,
    private loginService: LoginService,
    private routing: Router,
    private deviceService: DeviceService

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

    this.baseMaps = {
      "OSM": openStreet,
      "Google Map": googleStreets
    }

    var overlayMaps = {
      "Objects": items

      //"Names": this.names
    };


    // Vehicle Showing on Map
    var data = { id: 1 }
    this.deviceService.getMovingPosition(data).subscribe(res => {
      console.log(res)
    })
    // Vehicle Showing on Map

    // var markers = L.layerGroup()
    // const marker = L.marker([23.752942222222224,90.36127111111111], { icon: this.myIcon3 })
    // markers.addLayer(marker).addTo(this.map);

    // var geocodeService =Geocoding.geocodeService();
    var latlng = { lat: 23.774252395907105, lng: 90.41607082790188 }
    //   geocodeService.reverseGeocode().latlng([23.774252395907105, 90.41607082790188]).run((error, result)=> {
    //     if (error) {
    //       console.log(error)
    //       return;

    //     }

    //                 console.log(result);
    //               });
    //               const searchControl = new ELG.Geosearch().addTo(this.map);

    const v = L.Control.Geocoder.nominatim();
    v.reverse(latlng, this.map.options.crs.scale(this.map.getZoom()), results => {
      //console.log(results[0].name)
    })



    L.control.layers(this.baseMaps, overlayMaps).addTo(this.map);

    var sidebar = L.control.sidebar('sidebar').addTo(this.map);
    sidebar.show();
    L.easyButton('fa-exchange', function (btn, map) {
      sidebar.toggle()
    }).addTo(this.map);

    var controlBar = L.control.bar('menu', {
      position: 'bottom',
      visible: false
    }).addTo(this.map);;
    controlBar.show();
    var myButton = L.easyButton('fa-exchange', function (btn, map) {
      controlBar.toggle()
    }, { position: 'bottomright' }).addTo(this.map);

    this.historyBar = L.control.bar('history', {
      position: 'bottom',
      visible: false
    }).addTo(this.map);;

    var mook

    this.cusmapService.deviceDataCatch.subscribe(res => {

      if (res) {
        this.check = 1;
        //var mook
        console.log(res);
        res.forEach(elem => {
          mook = L.marker([elem.latitude, elem.longitude], { icon: this.myIcon3 }).bindPopup(elem.name + " <br> Address: " + elem.contact
            + " <br> Model: " + elem.model + " <br> Phone: " + elem.phone + " <br> Type: " + elem.category, { closeOnClick: false, autoClose: false }).addTo(this.map)
        })
        var polyline = L.polyline([]).addTo(this.map);


        this.myInterval = setInterval(() => {
          var data = { id: 1 }
          if (this.check == 1) {
            this.deviceService.getMovingPosition(data).subscribe(data => {
              data.forEach(element => {
                var latlng = { lat: element.latitude, lng: element.longitude }
                const v = L.Control.Geocoder.nominatim();
                v.reverse(latlng, this.map.options.crs.scale(this.map.getZoom()), results => {
                  element.address = (results[0].name)
                  console.log(element.name)
                  this.cusmapService.detailsDataExchange(element);
                })


                var marker
                //var marker= L.marker([0,0],{icon:this.myIcon3}).addTo(this.map);
                var markers = L.layerGroup()
                this.markerArray = L.layerGroup()
                console.log(element)
                this.marker = mook.setLatLng([element.latitude, element.longitude]).bindPopup(element.name + " <br> Address: " + element.contact
                  + " <br> Model: " + element.model + " <br> Phone: " + element.phone + " <br> Type: " + element.category, { closeOnClick: false, autoClose: false })
                  if(element){
                    this.line = polyline.addLatLng(L.latLng(element.latitude, element.longitude)).arrowheads({ size: '10px', color: 'red', frequency: 'endonly' });
                  }
      
                //this.map.panTo(new L.LatLng(element.latitude, element.longitude));
                //markers.addLayer(this.marker)
                //this.markerArray.push(this.marker[element.uniqueid])
                //console.log( this.markerArray)
                //this.map.addLayer(this.markerArray[this.marker[element.uniqueid]]);
              })
            })
          }
        }, 5 * 1000)
        //}


        // res.forEach(element => {
        //   var markers = L.layerGroup()
        //   console.log(element)
        //   this.marker[element.uniqueid] = L.marker([element.latitude, element.longitude], { icon: this.myIcon3 }).bindPopup(element.name + " <br> Address: " + element.contact
        //     + " <br> Model: " + element.model + " <br> Phone: " + element.phone + " <br> Type: " + element.category, { closeOnClick: false, autoClose: false }).openPopup().bindTooltip(element.name, {
        //       permanent: true
        //     }).addTo(this.map);
        //     markers.addLayer(this.marker)
        //    //this.markerArray.push(this.marker[element.uniqueid])
        //     //this.map.addLayer(this.markerArray[this.marker[element.uniqueid]]);
        // })
      }
    })

    this.cusmapService.deviceRemoveFromMap.subscribe(data => {
      if (data) {
        this.check = 0;
        clearInterval(this.myInterval);
        console.log(this.markerArray)
        data.forEach(element => {
          console.log(element.uniqueid)
          this.map.removeLayer(mook)
          this.map.removeLayer(this.line)
        })
      }
    })

    this.cusmapService.deviceLocationCatch.subscribe(res => {
      if (res) {
        var latlng2 = { lat: res.latitude, lng: res.longitude }
        console.log(latlng2)
        const v = L.Control.Geocoder.nominatim();
        v.reverse(latlng2, this.map.options.crs.scale(this.map.getZoom()), results => {
          res.address = (results[0].name)
          this.cusmapService.deviceDetails(res)
        })
        this.map.panTo(new L.LatLng(res.latitude, res.longitude));
      }
    })

    this.cusmapService.deviceHistoryCatch.subscribe(res => {
      console.log(res)
      if (res) {
        // myButton.disable();
        controlBar.hide();
        if (mook) {
          this.map.removeLayer(mook);
        }
        this.historyBar.show();

        //this.viewHistory=1
        var polyline = L.polyline([]).addTo(this.map);
        this.positions = res;
        if (this.positions != "") {


          this.positions.forEach((element, i) => {

            let expireTime = new Date(element.servertime);
            this.timeArray.push(expireTime)
            var time = (this.timeArray[i] - this.timeArray[i - 1]) / (1000 * 60);

            if (time > 20) {
              this.engine = L.marker([element.latitude, element.longitude], { icon: this.myIcon }).bindPopup(element.deviceid + " <br> Address: " + element.latitude
                + " <br> Model: " + element.longitude + " <br> Servertime: " + element.servertime + " <br> Speed: " + element.speed + " <br> Power: " + element.course, { closeOnClick: false, autoClose: false }).openPopup();
              this.engineArray.push(this.engine)
              this.history = L.layerGroup(this.engineArray);
            }

            if (time < 20 && time > 5) {
              //console.log("=====")
              this.park = L.marker([element.latitude, element.longitude], { icon: this.myIcon2 }).bindPopup(element.deviceid + " <br> Address: " + element.latitude
                + " <br> Model: " + element.longitude + " <br> Servertime: " + element.servertime + " <br> Speed: " + element.speed + " <br> Power: " + element.course, { closeOnClick: false, autoClose: false }).openPopup().addTo(this.map);
              this.parkArray.push(this.park)
              this.parking = L.layerGroup(this.parkArray);
            }
            //console.log(time);
            this.route = polyline.addLatLng(L.latLng(element.latitude, element.longitude));

            this.arrow = this.route.arrowheads({ size: '12px', color: 'red', yawn: 40, frequency: 10 });
            //this.marker.setLatLng([element.latitude,element.longitude]).bindTooltip("Loc:"+element.latitude+", "+element.longitude).addTo(this.map);
            this.storeLatlng.push([element.latitude, element.longitude])

          });
          this.parking.addTo(this.map)
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
                removeOnEnd: true,
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
        // if (this.marker.length > 0) {
        //   this.map.addLayer(this.marker);
        // }

        this.map.removeLayer(this.route);
        this.map.removeLayer(this.parking);
        controlBar.show();
        if (mook) {
          this.map.addLayer(mook);
        }

        this.historyBar.hide();
      }
    })


  }



  logout() {
    this.loginService.logout().subscribe(res => {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      this.routing.navigate(['/']);
    })

  }

}
