import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-controlled-goods',
  templateUrl: './controlled-goods.component.html',
  styleUrls: ['./controlled-goods.component.css']
})
export class ControlledGoodsComponent implements OnInit {

  policyType: string;
  sourceCountries: string[] = ['Russia', 'Iraq', 'Egypt', 'Afghanistan', 'Ukraine'];
  fileName: string;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
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
