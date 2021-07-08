import { Component, OnInit } from '@angular/core';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-history-menu',
  templateUrl: './history-menu.component.html',
  styleUrls: ['./history-menu.component.scss']
})
export class HistoryMenuComponent implements OnInit {

  constructor(private mapService:MapService,) { }

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
