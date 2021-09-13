import { Component, OnInit } from '@angular/core';
import { CusmapService } from '../../services/cusmap.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-history-info',
  templateUrl: './history-info.component.html',
  styleUrls: ['./history-info.component.scss']
})
export class HistoryInfoComponent implements OnInit {

  constructor( private cusmapService:CusmapService,
    private fb: FormBuilder,) { }
  speedControl = [{  value: 1 }, {  value: 2 }, {  value: 3 },{  value: 4 }, {  value: 5 }, { value: 6 }];
  selected=1;
  myform: FormGroup;
  ngOnInit(): void {
    this.myform = this.fb.group({
      motion: [ ],
    });
  }
  start(){
    var data={id:100}
    this.cusmapService.deviceMove(data);
 }

 stop(){
  var data={id:103}
  this.cusmapService.motionStop(data);
}

 toggle(){
   console.log('toggle')
   var data={id:101}
   this.cusmapService.deviceToggle(data);
}

onChange(e){
this.cusmapService.motionControl(e);
}

}
