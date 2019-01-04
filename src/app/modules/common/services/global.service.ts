import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable, DoCheck } from '@angular/core';
// import { ExistingCarrier } from '../../modules/amendments/entities/amendments-existing';
// import { NewRequest } from '../../modules/amendments/entities/new-request';

@Injectable()
export class GlobalService {


data:BehaviorSubject<any[]>;
    result:BehaviorSubject<any[]>;

    constructor() {
        this.data=new BehaviorSubject<any>([{"id":'12345',"workStream":'Standard Sanction',"businessArea":'CRB(GB)',"policyType":'New',"country":'Afganistan;Pakistan;Iran',"status":'In Process'},
  {"id":'23456',"workStream":'Standard Sanction',"businessArea":'CRB(GB)',"policyType":'New',"country":'Afganistan;Pakistan;Iran',"status":'In Process'},
    {"id":'34521',"workStream":'Iran Sanction',"businessArea":'IRR',"policyType":'Renewal',"country":'Afganistan;Pakistan;Iran',"status":'In Process'},
    {"id":'34521',"workStream":'Control Goods',"businessArea":'Transportation Marin',"policyType":'New',"country":'Afganistan;Pakistan;Iran',"status":'In Process'}
]);
this.result=new BehaviorSubject<any>([{"id":'12345',"workStream":'Standard Sanction',"businessArea":'CRB(GB)',"policyType":'New',"country":'Afganistan;Pakistan;Iran',"status":'In Process'},
  {"id":'23456',"workStream":'Standard Sanction',"businessArea":'CRB(GB)',"policyType":'New',"country":'Afganistan;Pakistan;Iran',"status":'In Process'},
    {"id":'34521',"workStream":'Iran Sanction',"businessArea":'IRR',"policyType":'Renewal',"country":'Afganistan;Pakistan;Iran',"status":'In Process'},
    {"id":'34521',"workStream":'Control Goods',"businessArea":'Transportation Marin',"policyType":'New',"country":'Afganistan;Pakistan;Iran',"status":'In Process'}
]);
    

    }
}
