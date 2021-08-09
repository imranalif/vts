import { Component, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';

import { Subscription } from 'rxjs';

import * as L from 'leaflet';
import 'leaflet-sidebar';
import 'leaflet-control-bar';
import 'leaflet-easybutton';
import 'leaflet-arrowheads'
import '/var/projects/angular/VTSApp/angular/node_modules/leaflet.motion/dist/leaflet.motion.min.js';
import { CusmapService } from '../../services/cusmap.service';

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
  myIcon3:string;
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
  storeLatlng=[]
  polylineMotion
  timeArray = []

  constructor(
    private mediaObserver: MediaObserver,
    private cusmapService: CusmapService

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
      iconUrl: './assets/client/images/123.png',
      iconSize: [40, 80],
      iconAnchor: [12, 69],
      color: 'green',
      className: 'icon'

    });


    this.map = L.map('mapid', {
      center: [23.767776299452247, 90.40417671203615],
      zoom: 15,
      zoomControl: false
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

    var markers = L.layerGroup()
    const marker = L.marker([23.752942222222224,90.36127111111111], { icon: this.myIcon3 })
    markers.addLayer(marker).addTo(this.map);

    L.control.layers(this.baseMaps,overlayMaps).addTo(this.map);

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

    this.cusmapService.deviceDataCatch.subscribe(res => {

      if (res) {
        res.forEach(element => {
          var markers = L.layerGroup()
          console.log(element)
          this.marker[element.uniqueid] = L.marker([element.latitude, element.longitude], { icon: this.myIcon3 }).bindPopup(element.name + " <br> Address: " + element.contact
            + " <br> Model: " + element.model + " <br> Phone: " + element.phone + " <br> Type: " + element.category, { closeOnClick: false, autoClose: false }).openPopup().bindTooltip(element.name, {
              permanent: true
            }).addTo(this.map);
            markers.addLayer(this.marker)
           //this.markerArray.push(this.marker[element.uniqueid])
            //this.map.addLayer(this.markerArray[this.marker[element.uniqueid]]);
        })
      }
    })

    this.cusmapService.deviceRemoveFromMap.subscribe(data => {

      if (data) {
        data.forEach(element => {
          console.log(element.uniqueid)
          this.map.removeLayer(this.marker[element.uniqueid])
        })
      }
    })

    this.cusmapService.deviceLocationCatch.subscribe(res => {
      if (res) {
        this.map.panTo(new L.LatLng(res.lat, res.lng));
      }
    })

    this.cusmapService.deviceHistoryCatch.subscribe(res => {
      if (res) {
       // myButton.disable();
       controlBar.hide();
        this.historyBar.show();
        //this.viewHistory=1
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

  }

  

  logout() {

  }

}
