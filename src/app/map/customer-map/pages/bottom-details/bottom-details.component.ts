import { Component, OnInit } from '@angular/core';
import { CusmapService } from '../../services/cusmap.service';

@Component({
  selector: 'app-bottom-details',
  templateUrl: './bottom-details.component.html',
  styleUrls: ['./bottom-details.component.scss']
})
export class BottomDetailsComponent implements OnInit {
  deviceData
  constructor(private cusmapService:CusmapService) { }

  ngOnInit(): void {
    this.cusmapService.deviceDetailsCatch.subscribe(res => {
      if (res) {
        console.log(res)
       this.deviceData=res;
       console.log(this.deviceData)
      }
    })
  }

}
