import { Component, OnInit } from '@angular/core';
import { CusmapService } from '../../services/cusmap.service';
import * as L from 'leaflet';
import  'leaflet-control-geocoder/dist/Control.Geocoder';

@Component({
  selector: 'app-bottom-details',
  templateUrl: './bottom-details.component.html',
  styleUrls: ['./bottom-details.component.scss']
})
export class BottomDetailsComponent implements OnInit {
  address
  deviceData
  attribute
  deviceName
  isLoading
  url
  map
  deviceId
  link="http://www.google.com/maps/place/"
  constructor(private cusmapService:CusmapService) { }

  ngOnInit(): void {
    this.map = L.map('mapidd', {
      center: [23.774252395907105, 90.41607082790188],
      zoom: 17,
      zoomControl: false,
      attributionControl: false
    });

    var openStreet = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

    console.log(this.url)
    this.cusmapService.detailsDataCatch.subscribe(res => {
      if (res) {
         this.deviceId=res[0].deviceid;
        var latlng = { lat: res[0].latitude, lng: res[0].longitude }
        const v = L.Control.Geocoder.nominatim();
                v.reverse(latlng, this.map.options.crs.scale(this.map.getZoom()), results => {
                  if(results[0]){
                    this.address = (results[0].name)
                  }
                  
                })

        this.url=this.link+res.latitude+','+res.longitude
       this.deviceData=res[0];
       this.deviceName=res[0];
       this.attribute=JSON.parse(this.deviceData.attributes)
      }
    })
    this.cusmapService.deviceDetailsCatch.subscribe(response => {
      if (response) {
         if(response.deviceid==this.deviceId){
        var latlng = { lat: response.latitude, lng: response.longitude }
        const v = L.Control.Geocoder.nominatim();
                v.reverse(latlng, this.map.options.crs.scale(this.map.getZoom()), results => {
                  if(results[0]){
                    this.address = (results[0].name)
                  }
                  
            
                })
        this.url=this.link+response.latitude+','+response.longitude
        this.deviceData=response;
        this.attribute=JSON.parse(this.deviceData.attributes)
      }
     }
    })

  }

  findLocation(data){
   
  }

}
