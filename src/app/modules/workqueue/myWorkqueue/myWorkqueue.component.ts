import { Component ,DoCheck} from '@angular/core';
import * as _ from 'lodash';
import{GlobalService} from '../../common/services/global.service';
import { Router } from "@angular/router";


@Component({
  selector: 'my-workqueue',
  templateUrl: './myWorkqueue.component.html',
  styleUrls: ['./myWorkqueue.component.css']
})
export class MyWorkqueueComponent implements DoCheck {
  title = 'My Task Workqueue';
  territorys: string[] = ['SMART', 'Broad'];
  workstreams: string[] = ['Standard Sanctions', 'Iran Sanctions', 'Consultancy Service', 'Controlled Goods', 'Payments',];
  sanctionCountries: string[] = ['Afghanistan', 'Belarus ', 'Cuba', 'Ukraine(Crimea)', 'Iran',];
  statusList: string[] = ['Draft', 'Submitted', 'In-Process', 'Awaiting Information', 'Approved', 'Declined', 'Amendment'];
  policytypes: string[] = ['New', 'Renewal'];
  RAGStatus: string[] = ['Green', 'Amber', 'Red'];
  businessArea:string[]=['CRB(GB)','Transportation Marin','IRR (Willis Re)'];
data:any[]=[{"id":'12345',"workStream":'Standard Sanction',"businessArea":'CRB(GB)',"policyType":'New',"date":'15-jan-2019',"assignedTo":'Avinash Yadav',"status":'In Process'},
  {"id":'23456',"workStream":'Standard Sanction',"businessArea":'CRB(GB)',"policyType":'New',"date":'15-jan-2019',"assignedTo":'Avinash Yadav',"status":'In Process'},
    {"id":'34521',"workStream":'Iran Sanction',"businessArea":'IRR',"policyType":'Renewal',"date":'25-Feb-2019',"assignedTo":'Amruta D',"status":'In Process'},
    {"id":'34521',"workStream":'Control Goods',"businessArea":'Transportation Marin',"policyType":'New',"date":'25-Feb-2019',"assignedTo":'Amruta D',"status":'In Process'}
];

tempdata:any[];
  step = 0;

  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  setStep() { }

  constructor(private globalService:GlobalService,private router: Router){

  }
  ngOnInit(){
    this.tempdata=this.globalService.data.value;
  }

  ngDoCheck(){
this.tempdata=this.globalService.data.getValue();
  }

  filter(val) {
    this.tempdata=this.globalService.data.value
    let updatedData = _.filter(this.tempdata, (item: any) => {
      return item.workStream == val;
    });
    this.tempdata = updatedData;
    this.globalService.data.next(this.tempdata)
    
  }

  navigate(val){
console.log(val)
switch(val){
  case "Standard Sanction":{
    this.router.navigate(['standard-sanction']);
  };
  break;
   case "Iran Sanction":{
    this.router.navigate(['iran-sanction']);
  };
  break;
   case "Control Goods":{
    this.router.navigate(['controlled-goods']);
  };
  break;
   case "default":{
    this.router.navigate(['my-workqueue']);
  }
}

  }
}