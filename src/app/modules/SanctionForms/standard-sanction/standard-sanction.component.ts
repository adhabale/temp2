import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-standard-sanction',
  templateUrl: './standard-sanction.component.html',
  styleUrls: ['./standard-sanction.component.css']
})
export class StandardSanctionComponent implements OnInit {
  durations: string[] = ['-1 year policy', '1 year policy', '2 year policy', '3 year policy', '4 year policy', '5+ year policy',];

  sanctionedCountries: string[] = ['Russia', 'Iraq', 'Egypt', 'Afghanistan', 'Ukraine'];

  insuranceType: string[] = ['Liability', 'Property Damage'];

  businessAreas: string[] = ['Marine', 'Transportation'];

  legalEntities: string[] = ['Willis limited', 'Tower watson limited'];

  nationalities: string[] = ['UK', 'Russia', 'Iran'];

  activityValue = 'Airport and aircraft buildings';

  insuredName = 'ABC Airline';

  insuredName1 = 'STR Airline';

  premiums: string[] = ['GBP', 'HKD'];

  claims: string[] = ['GBP', 'HKD'];

  usInvolved: number;

  policyType: string;

  fileName: string;
  constructor() { }

  ngOnInit() {
    this.usInvolved = 0;
    this.policyType = "New Policy";
  }

  showInfo() {
    (<any>$('[data-toggle="popover"]')).popover({
      trigger: 'focus'
    });
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
