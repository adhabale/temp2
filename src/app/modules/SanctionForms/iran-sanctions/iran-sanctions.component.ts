import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iran-sanctions',
  templateUrl: './iran-sanctions.component.html',
  styleUrls: ['./iran-sanctions.component.css']
})
export class IranSanctionsComponent implements OnInit {

  policyType: string;
  durations: string[] = ['-1 year policy', '1 year policy', '2 year policy', '3 year policy', '4 year policy', '5+ year policy',];
  reInsuranceServicesList: string[] = ['Marine Cargo', 'K&R', 'health and benefits advisory'];
  sanctionedCountries: string[] = ['Russia', 'Iraq', 'Egypt', 'Afghanistan', 'Ukraine'];
  currencies: string[] = ['GBP', 'HKD'];
  insuranceTypes: string[] = ['N/A', 'Reinsurance', 'Facultative', 'Treaty'];
  iranianConsignees: string[] = ['N/A', 'Consignees A', 'Charterers A', 'Consignees A'];
  fileName: string;
  constructor() { }

  ngOnInit() {
    this.policyType = "New Policy";
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
