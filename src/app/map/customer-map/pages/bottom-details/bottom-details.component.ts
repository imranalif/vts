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
    this.cusmapService.deviceDetailsCatch.subscribe(res => {
      if (res) {
        var latlng = { lat: res.latitude, lng: res.longitude }
        const v = L.Control.Geocoder.nominatim();
                v.reverse(latlng, this.map.options.crs.scale(this.map.getZoom()), results => {
                  if(results[0]){
                    this.address = (results[0].name)
                  }
                  
                })

        this.url=this.link+res.latitude+','+res.longitude
       this.deviceData=res;
       this.deviceName=res;
       this.attribute=JSON.parse(this.deviceData.attributes)
      }
    })
    this.cusmapService.detailsDataCatch.subscribe(response => {
   
      if (response) {
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
    })

  }

  findLocation(data){
   
  }

}
