import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog/";
import * as L from 'leaflet';
import 'leaflet-draw';
import { GeofenceService } from '../../services/geofence.service';

@Component({
  selector: 'app-geofence-map-edit',
  templateUrl: './geofence-map-edit.component.html',
  styleUrls: ['./geofence-map-edit.component.scss']
})
export class GeofenceMapEditComponent implements OnInit {
  check
  drawnItemsTest
  polygon
  circle
  public map
  private baseMaps
  public str: string = '1'
  public getStr: string;
  public getStrMap=[];
  public getStrMapF=[];
  public  s: any=["1"]
  public polylineArray: any[] = []
  constructor(
    private dialogRef: MatDialogRef<GeofenceMapEditComponent>,
    private dialog: MatDialog,
    private geofenceService: GeofenceService
  ) { }

  ngOnInit(): void {

    this.dialogRef.disableClose = true;



    this.map = L.map('mapid', {
      center: [23.774252395907105, 90.41607082790188],
      zoom: 17,
      zoomControl: false,
      attributionControl: false
    });

    this.geofenceService.geofenceEditDataCatch.subscribe(res=>{
      this.getStr=res;
      this.getStrMap=this.getStr.split(/[,()]/);
      console.log(this.getStrMap[0].trim())
   
      if(this.getStrMap[0].trim()=="POLYGON"){
        this.getStrMap=this.getStrMap.slice(1, -1);
        this.getStrMap.forEach(e=>{
         e= e.split(' ').join(',');
         var array = e.split(',');
  var lati = parseFloat(array[0]);
  var lngi = parseFloat(array[1]);
         this.getStrMapF.push([lati,lngi])
        })
        //console.log(this.getStrMap.split(' ').join(''))
       
        this.polygon = L.polygon( this.getStrMapF);
      }

      if(this.getStrMap[0].trim()=="CIRCLE"){
        this.getStrMap=this.getStrMap.slice(1, -1);
        var e=this.getStrMap[0].split(' ').join(',')
        var array = e.split(',');
        var lat = parseFloat(array[0]);
        var lng = parseFloat(array[1]);
        var radi=parseFloat(this.getStrMap[1])
        
  
       this.circle = L.circle([lat,lng], {
          color: 'red',
          fillColor: '#f03',
          fillOpacity: 0.5,
          radius: radi
      });
     
      }
      
     
          })

    var openStreet = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

    var googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      center: [33.590241, 130.421222],
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    });

    openStreet.addTo(this.map);

    var layerGroup = L.layerGroup().addTo(this.map);

    this.baseMaps = {
      "OSM": openStreet,
      "Google Map": googleStreets
    }

    L.control.layers(this.baseMaps).addTo(this.map);



    var drawnItems = new L.FeatureGroup();
    this.map.addLayer(drawnItems);
    var drawControl = new L.Control.Draw({
      edit: {
        featureGroup: drawnItems,
      
      }
    });
    this.map.addControl(drawControl);
    if(this.polygon){
      drawnItems.addLayer(this.polygon);
    }
    if(this.circle){
      drawnItems.addLayer(this.circle);
    }
    


    this.map.on('draw:created', function (e) {

      var type = e.layerType,
        layer = e.layer;
        var shape = layer.toGeoJSON()
      
      drawnItems.addLayer(this.check);

      var shapes = getShapes(drawnItems);
     

      if (shapes[0]._mRadius) {
        this.str = `CIRCLE (${shapes[0]._latlng.lat} ${shapes[0]._latlng.lng}, ${shapes[0]._mRadius})`;
        localStorage.setItem('line', this.str);
      }

      else {
        shapes.forEach(element => {
          element.forEach((e, i) => {
            var a = e.map(m => {
              return (`${m.lat} ${m.lng}`)
            })
            this.str = `POLYGON (${a} )`;
          })
        })
      }
      // Process them any way you want and save to DB
      localStorage.setItem('line', this.str);

     
    }
    );

   
    
   
    this.map.on("draw:edited", function (e) {
      let layers = e.layers;
      var area=layers._layers
      area=Object.values(area);
      if (area[0]._mRadius) {
        this.str = `CIRCLE (${area[0]._latlng.lat} ${area[0]._latlng.lng}, ${area[0]._mRadius})`;
        localStorage.setItem('line', this.str);
      }

      else {
        area[0]._latlngs.map(element => {
         var a = element.map(m => {
             // var a = e.map(m => {
                return (`${m.lat} ${m.lng}`)
             // })
             
           })
           this.str = `POLYGON (${a} )`;
         })
         localStorage.setItem('line', this.str);
       }
      layers.eachLayer(function (layer) {
      });
    });



    var getShapes = function (drawnItems) {
      var shapes = [];
      drawnItems.eachLayer(function (layer) {

        if (layer instanceof L.Polyline) {
          shapes.push(layer.getLatLngs())
        }

        if (layer instanceof L.Circle) {
          shapes.push(layer)
        }

        if (layer instanceof L.Marker) {
          shapes.push([layer.getLatLng()]);
        }
      });

      return shapes;
    };  
  }

  public close(): void {
    this.dialogRef.close();
  }


  public editGeofence(): void {
    this.s=localStorage.getItem('line');
    this.geofenceService.geofenceDataExchange(this.s);
    this.close();
  }
  

}
