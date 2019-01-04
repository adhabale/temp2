import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import{GlobalService} from '../services/global.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  language: string;
  tempdata;
  constructor(private translate: TranslateService,private globalService:GlobalService) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.language = "English";
  }

  useLanguage(language: string,selectedLang:string) {
    this.translate.use(language);
    this.language = selectedLang;
  }

filter(val) {
    this.tempdata=this.globalService.result.value
    let updatedData = _.filter(this.tempdata, (item: any) => {
      return item.workStream == val;
    });
    this.tempdata = updatedData;
    this.globalService.data.next(this.tempdata)
    console.log()
  }

}
