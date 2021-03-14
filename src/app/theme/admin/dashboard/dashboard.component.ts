import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-draw';
import 'leaflet-toolbar'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  map
  constructor() { }

  ngOnInit(): void {
    
    setTimeout(() => {
      this.map = L.map('mapid', {drawControl: true}).setView( [23.777176, 90.399452], 13);
    //var map = L.map('mapid', {drawControl: true}).setView( [23.777176, 90.399452], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  //},100);

  // var drawnItems = new L.FeatureGroup();
  // this.map.addLayer(drawnItems);
  // var drawControl = new L.Control.Draw({
  //     edit: {
  //         featureGroup: drawnItems
  //     }
  // });
  // this.map.addControl(drawControl);


 var drawnItems = new L.FeatureGroup();
this.map.addLayer(drawnItems);

this.map.on('draw:created', function (e) {

 var type = e.layerType,
     layer = e.layer;

 drawnItems.addLayer(layer);

 var shapes = getShapes(drawnItems);

 // Process them any way you want and save to DB
 

});

var getShapes = function(drawnItems) {

 var shapes = [];

 drawnItems.eachLayer(function(layer) {

     // Note: Rectangle extends Polygon. Polygon extends Polyline.
     // Therefore, all of them are instances of Polyline
     if (layer instanceof L.Polyline) {
         shapes.push(layer.getLatLngs())
     }

     if (layer instanceof L.Circle) {
         shapes.push([layer.getLatLng()])
     }

     if (layer instanceof L.Marker) {
         shapes.push([layer.getLatLng()]);
     }

 });

 return shapes;
};
},100);
//   setTimeout(() => {
//   const map = L.map('mapid').setView( [23.777176, 90.399452], 13);
//   new L.Toolbar2.DrawToolbar({
//     position: 'topr'
// }).addTo(map);
// },100)

  
  //this.mapFunction();
//}
}

// mapFunction(){
//   const mapp = L.map('mapid').setView( [23.777176, 90.399452], 13);
//   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution:
//       '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//   }).addTo(mapp);
// }
    
  //   var map = L.map('map', {
  //     center: [51.505, -0.09],
  //     zoom: 13
  // });

  

}
