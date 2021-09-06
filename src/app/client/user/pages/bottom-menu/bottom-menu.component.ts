import { Component, OnInit } from '@angular/core';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-bottom-menu',
  templateUrl: './bottom-menu.component.html',
  styleUrls: ['./bottom-menu.component.scss']
})
export class BottomMenuComponent implements OnInit {
attribute
deviceData
deviceName
url:string
  link="http://www.google.com/maps/place/"
  constructor(private mapService:MapService) { }

  ngOnInit(): void {
    
    //const department= JSON.parse(req.body.department)

    this.mapService.selectedDeviceDataCatch.subscribe(res => {
      if (res) {
        console.log(res[0])
        this.url=this.link+res[0].latitude+','+res[0].longitude
       this.deviceData=res;
       this.deviceName=res[0].name;
       this.attribute=JSON.parse(res[0].attributes)
       console.log(this.deviceData)
      }
    })
  }

}
