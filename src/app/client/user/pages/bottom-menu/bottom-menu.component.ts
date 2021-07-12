import { Component, OnInit } from '@angular/core';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-bottom-menu',
  templateUrl: './bottom-menu.component.html',
  styleUrls: ['./bottom-menu.component.scss']
})
export class BottomMenuComponent implements OnInit {
deviceData
  constructor(private mapService:MapService) { }

  ngOnInit(): void {
    
    //const department= JSON.parse(req.body.department)

    this.mapService.selectedDeviceData.subscribe(res => {
      if (res) {
        console.log(res)
       this.deviceData=res;
       console.log(this.deviceData)
      }
    })
  }

}
