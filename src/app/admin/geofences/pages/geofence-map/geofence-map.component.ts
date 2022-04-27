import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog/";
import * as L from 'leaflet';
import 'leaflet-draw';
import { GeofenceService } from '../../services/geofence.service';


@Component({
  selector: 'app-geofence-map',
  templateUrl: './geofence-map.component.html',
  styleUrls: ['./geofence-map.component.scss']
})
export class GeofenceMapComponent implements OnInit {
  check
  drawnItemsTest
  polygon
  public map
  private baseMaps
  public str: string = '1'
  public getStr: string;
  public getStrMap=[];
  public getStrMapF=[];
  public  s: any=["1"]
  public polylineArray: any[] = []
  constructor(
    private dialogRef: MatDialogRef<GeofenceMapComponent>,
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

//     this.geofenceService.geofenceEditDataCatch.subscribe(res=>{
//       this.getStr=res;
//       this.getStrMap=this.getStr.split(/[,()]/);
//       this.getStrMap=this.getStrMap.slice(1, -1);
//       this.getStrMap.forEach(e=>{
//        e= e.split(' ').join(',');
//        var array = e.split(',');
// var b = parseFloat(array[0]);
// var c = parseFloat(array[1]);
//        this.getStrMapF.push([b,c])
//       })
//       //console.log(this.getStrMap.split(' ').join(''))
      
//       //this.polygon = L.polygon( this.getStrMapF);
     
//           })

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
      draw: {
        polyline: false,
        marker: false
    },
      edit: {
        featureGroup: drawnItems,
      
      }
    });
    this.map.addControl(drawControl);
    // var drawnItems = new L.FeatureGroup();
    // this.map.addLayer(drawnItems);
    //drawnItems.addLayer(this.polygon);
    this.map.on('draw:created', function (e) {
      var type = e.layerType,
        layer = e.layer;
        this.check=layer;
//var ar=JSON.stringify(e);
        //localStorage.setItem('li', CircularJSON.stringify(e));

        var shape = layer.toGeoJSON()
      
      drawnItems.addLayer(this.check);
      
      var shapes = getShapes(drawnItems);
     console.log(shapes)

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
            this.str = `POLYGON (${a} )`;
          })
        })
        localStorage.setItem('line', this.str);
      }
      layers.eachLayer(function (layer) {
      });
    });



    var getShapes = function (drawnItems) {
      var shapes = [];
      drawnItems.eachLayer(function (layer) {

        // Note: Rectangle extends Polygon. Polygon extends Polyline.
        // Therefore, all of them are instances of Polyline
        if (layer instanceof L.Polyline) {
          console.log(layer.getLatLngs())
          shapes.push(layer.getLatLngs())
        }

        if (layer instanceof L.Circle) {
          shapes.push(layer)
        }

        if (layer instanceof L.Marker) {
          console.log(layer)
          shapes.push([layer.getLatLng()]);
        }
      });

      return shapes;
    };

    
  }

  public close(): void {
    this.dialogRef.close();
  }

  public addGeofence(): void {
    this.s=localStorage.getItem('line');
    console.log(this.s)
    this.geofenceService.geofenceDataExchange(this.s);
    this.close();
  }

}
