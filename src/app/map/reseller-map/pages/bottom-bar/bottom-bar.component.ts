import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import  'leaflet-control-geocoder';
import { MapService } from 'src/app/client/user/services/map.service';
import { ResellermapService } from '../../services/resellermap.service';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss']
})
export class BottomBarComponent implements OnInit {

  map
address
attribute
deviceData
deviceName
url:string
  link="http://www.google.com/maps/place/"
  constructor(
    private resellermapService: ResellermapService) { }

  ngOnInit(): void {

    this.map = L.map('mapt', {
      center: [23.774252395907105, 90.41607082790188],
      zoom: 17,
      zoomControl: false,
      attributionControl: false
    });

    var openStreet = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
    
    //const department= JSON.parse(req.body.department)

    this.resellermapService.selectedDeviceDataCatch.subscribe(res => {
      if (res) {
        var latlng = { lat: res[0].latitude, lng: res[0].longitude }
        const v = L.Control.Geocoder.nominatim();
                v.reverse(latlng, this.map.options.crs.scale(this.map.getZoom()), results => {
                  this.address = (results[0].name)
                })
  
        this.url=this.link+res[0].latitude+','+res[0].longitude
       this.deviceData=res[0];
       this.deviceName=res[0].name;
       this.attribute=JSON.parse(res[0].attributes)
      }
    })

    this.resellermapService.detailsDataCatch.subscribe(response => {
      if (response) {
        var latlng = { lat: response[0].latitude, lng: response[0].longitude }
        const v = L.Control.Geocoder.nominatim();
                v.reverse(latlng, this.map.options.crs.scale(this.map.getZoom()), results => {
                  this.address = (results[0].name)
                })
        this.url=this.link+response[0].latitude+','+response[0].longitude
       this.deviceData=response[0];
       this.attribute=JSON.parse(response[0].attributes)
      }
    })
  }

}
