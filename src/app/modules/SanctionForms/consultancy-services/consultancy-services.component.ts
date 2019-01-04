import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultancy-services',
  templateUrl: './consultancy-services.component.html',
  styleUrls: ['./consultancy-services.component.css']
})
export class ConsultancyServicesComponent implements OnInit {

  sourceCountries: string[] = ['Russia', 'Iraq', 'Egypt', 'Afghanistan', 'Ukraine'];
  currencies: string[] = ['GBP', 'HKD'];
  fileName: string;
  constructor() { }

  ngOnInit() {
  }
  preview(event) {
    console.log(event);
    // var file: string;
    // var ch='\';
    // file = event.srcElement.value;
    // this.fileName = file.substring(file.lastIndexOf('\'),file.length());
    this.fileName = event.srcElement.value;

  }
}
