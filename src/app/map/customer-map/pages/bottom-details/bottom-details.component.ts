import { Component, OnInit } from '@angular/core';
import { CusmapService } from '../../services/cusmap.service';
import * as L from 'leaflet';
import  'leaflet-control-geocoder';

@Component({
  selector: 'app-bottom-details',
  templateUrl: './bottom-details.component.html',
  styleUrls: ['./bottom-details.component.scss']
})
export class BottomDetailsComponent implements OnInit {
  deviceData
  attribute
  deviceName
  isLoading
  url
  link="http://www.google.com/maps/place/"
  constructor(private cusmapService:CusmapService) { }

  ngOnInit(): void {
    console.log(this.url)
    this.cusmapService.deviceDetailsCatch.subscribe(res => {
      if (res) {
        this.url=this.link+res.latitude+','+res.longitude
       this.deviceData=res;
       this.deviceName=res;
       this.attribute=JSON.parse(this.deviceData.attributes)
      }
    })
    this.cusmapService.detailsDataCatch.subscribe(response => {
   
      if (response) {
        this.url=this.link+response.latitude+','+response.longitude
        this.deviceData=response;
        this.attribute=JSON.parse(this.deviceData.attributes)
      }
    })
  }

  findLocation(data){
   
  }

}
