import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ReportService } from '../../services/report.service';
import { JsontocsvService } from '../../services/jsontocsv.service';
import { PaginationService } from 'src/app/shared/services/pagination.service';
import { MatSort } from '@angular/material/sort';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from 'src/app/admin/customer/services/customer.service';
import { DeviceService } from 'src/app/admin/devices/services/device.service';
import { DateformateService } from 'src/app/shared/services/dateformate.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ignition-report',
  templateUrl: './ignition-report.component.html',
  styleUrls: ['./ignition-report.component.scss']
})
export class IgnitionReportComponent implements OnInit {

  myform: FormGroup;
  positionArray=[]
  page
  reportData
  params = {}
  pager: any = [];
  record: any = [];
  currentPage=1;
  customers
  customerDevices
  devices
  devicesAC=[]
  devicesArray=[]
  devicesIndex=[]
  arrrayValue: any = [];
  mapurl
  onOffData=[]
  onData
  offData
  d

  stopflag=0
  startflag=0
  preSpeed=0;
  startstopArray=[];
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  link="http://www.google.com/maps/place/"
  isLoading = true;
  displayedColumns = [ 'ignition', 'event','speed', 'trip', 'engine','stop','driver','address' ];
  constructor(private reportService: ReportService,
    private pagination: PaginationService,
    private fb: FormBuilder,
    private customerService: CustomerService,
    private deviceService: DeviceService,
    private dateFormatService: DateformateService,
    private csv: JsontocsvService,
    private router: Router,) { }

  ngOnInit(): void {
    this.myform = this.fb.group({
      customer: [''],
      deviceid: [''],
      fromdate: [''],
      todate: ['']
    });

    this.getAllDevices()
    this.getAllCustomer()

    setTimeout(()=>{   
      const today=new Date
      var requiredDate=new Date(today.getFullYear(),today.getMonth(),today.getDate())
      this.myform.patchValue(
        {
        fromdate: requiredDate,
        todate:new Date()
      })
      
    }, 50);
  }






  msToTime(duration) {
    var milliseconds = Math.floor((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    // hours = (hours < 10) ? "0" + hours : hours;
    // minutes = (minutes < 10) ? "0" + minutes : minutes;
    // seconds = (seconds < 10) ? "0" + seconds : seconds;
    if(hours){
      return hours + "h " + minutes + "min " + seconds + "s";
    }

    return  minutes + "min " + seconds + "s";
  }

  cKm(data){
    console.log(data)
    if(data=='NaN')
    {data=0.00}
    return  data + " Km " ;
  }

  ckph(sp){
    return  sp + " kph " ;
  }



  getAllCustomer(): void {
    this.customerService. getAllCustomerList().subscribe(res => {
      this.customers = res;
    });
  }

  onChangeCustomer(e){
    this.deviceService.getDeviceByCustomerId(e).subscribe(res=>{
      this.customerDevices=res;
    })
  }

  getAllDevices(){
    this.deviceService.getAllDevices().subscribe(res=>{
      this.devices=res;
      console.log(this.devices)
      this.devices.forEach((elem, i) => {
this.devicesArray.push(this.devices[i].id)
        this.devicesIndex[elem.id] = this.devices[i];
      }
      );
      // report call here for delay
      //this.getReport(); 
    })
  }

  public selectAll(ev) {
    console.log(ev)
    this.arrrayValue = [...Array(this.devices.length + 1).keys()];
    if (ev._selected) {
        this.myform.get('deviceid').setValue(this.arrrayValue);
        ev._selected = true;
      }
    if (ev._selected === false) {
        this.myform.get('deviceid').setValue([]);
        console.log('3');
      }
    }


    getReportBySearch(){
      if(this.myform.value.deviceid){
        this.devicesArray=this.myform.value.deviceid
      }
    this.devicesAC=this.devicesArray
    var from_date = this.dateFormatService.dateTime('datetime', this.myform.value.fromdate)
    var to_date = this.dateFormatService.dateTime('datetime', this.myform.value.todate)

    this.params = {devicesearch:this.devicesAC, fromdate: from_date,
      todate:to_date };
    this.reportService.getIngineOnOffEvent(this.params).subscribe(res => {
      this.reportData=res;
console.log(this.reportData)
      this.reportData.forEach(e => {
       this.positionArray.push(e.positionid)
      });
      var data={id:this.positionArray}
      this.reportService.getIgnitionOnOffPosition(data).subscribe(response=>{

var d=response
this.reportData = this.reportData.map(x=>Object.assign(x, d.find(y=>y.id==x.positionid)))

this.reportData.forEach(element => {
  if(element.type=='ignitionOn'){
   
    if(this.offData){
      this.offData.end=this.dateFormatService.dateTime('datetime', element.eventtime);
      this.offData.stoptime=new Date(this.offData.end).valueOf() - new Date(this.offData.eventtime).valueOf();
      this.offData.stoptime=this.msToTime(this.offData.stoptime)
      var attribute=JSON.parse(element.attributes)
      this.d=Number(attribute.totalDistance)
      console.log(this.offData.distance)
    this.onOffData.push(this.offData)
  }
  element.eventtime=this.dateFormatService.dateTime('datetime', element.eventtime);
      this.onData={status:'On',eventtime:element.eventtime,end:'',speed:'',distance:'',enginework:'',stoptime:'',driver:'',location:'',latitude:element.latitude,longitude:element.longitude}
  }
  else{
    if(this.onData){
      this.onData.end=this.dateFormatService.dateTime('datetime', element.eventtime);
      this.onData.enginework=new Date(this.onData.end).valueOf() - new Date(this.onData.eventtime).valueOf();
      this.onData.enginework=this.msToTime(this.onData.enginework)
    this.onData.speed=this.ckph(Math.round(element.speed * 1.852));
    var attribute=JSON.parse(element.attributes)
      var a=Number(attribute.totalDistance)
      console.log(a)
      console.log(this.onData.distance)
      this.onData.distance=this.cKm(((a-this.d)/1000).toFixed(2));
    this.onOffData.push(this.onData)
  }
  element.eventtime=this.dateFormatService.dateTime('datetime', element.eventtime);
      this.offData={status:'Off',eventtime:element.eventtime,speed:'',end:'',distance:'',enginework:'',stoptime:'',driver:'',location:'',latitude:element.latitude,longitude:element.longitude}
  }
});
console.log(this.onOffData)
this.dataSource = new MatTableDataSource( this.onOffData as any);

const n = BigInt(2.6E7);
const a = BigInt(2.5E7);
console.log(Number(7.53245683E7)-Number(7.53245673E7))
      })

    })
    }
    goBack(){
      this.myform.value.customer=' ';
      const today=new Date
      var requiredDate=new Date(today.getFullYear(),today.getMonth(),today.getDate())
      this.myform.patchValue(
        {
          deviceid:'',
          customer:'',
        fromdate: requiredDate,
        todate:new Date()
      })
    }

    gotoGoogleMap(a,b){
      this.mapurl=this.link+a+','+b
      //this.router.navigate([url]);  
    }

    convertCsv() {
      return this.csv.downloadFile(this.reportData);
    }

}
