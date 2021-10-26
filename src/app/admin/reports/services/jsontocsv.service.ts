import { Injectable } from '@angular/core';
import * as json2csv  from 'json2csv';
import { saveAs } from "file-saver";

@Injectable({
  providedIn: 'root'
})
export class JsontocsvService {

  Json2csvParser = json2csv.Parser;

  constructor() { }
  public downloadFile(data: any, filename?: string) {
    let csvData = this.convertToCSV(data);
    let file = new Blob([csvData], { type: "text/csv;charset=utf-8" });
    saveAs(file, "data.csv");
  }

  public convertToCSV(objArray: any, fields?) {
    let json2csvParser = new this.Json2csvParser();
    let csv = json2csvParser.parse(objArray);
    console.log(csv);
    return csv;
  }
}
