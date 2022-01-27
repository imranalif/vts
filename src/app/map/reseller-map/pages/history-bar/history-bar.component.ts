import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/client/user/services/map.service';

@Component({
  selector: 'app-history-bar',
  templateUrl: './history-bar.component.html',
  styleUrls: ['./history-bar.component.scss']
})
export class HistoryBarComponent implements OnInit {

  constructor(private mapService:MapService) { }

  ngOnInit(): void {
  }

  start(){
    var data={id:100}
    this.mapService.move(data);
 }

 toggle(){
   console.log('toggle')
   var data={id:101}
   this.mapService.toggleMove(data);
}

}
