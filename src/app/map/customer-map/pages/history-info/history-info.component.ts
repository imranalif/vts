import { Component, OnInit } from '@angular/core';
import { CusmapService } from '../../services/cusmap.service';

@Component({
  selector: 'app-history-info',
  templateUrl: './history-info.component.html',
  styleUrls: ['./history-info.component.scss']
})
export class HistoryInfoComponent implements OnInit {

  constructor( private cusmapService:CusmapService) { }

  ngOnInit(): void {
  }
  start(){
    var data={id:100}
    this.cusmapService.deviceMove(data);
 }

 toggle(){
   console.log('toggle')
   var data={id:101}
   this.cusmapService.deviceToggle(data);
}

}
