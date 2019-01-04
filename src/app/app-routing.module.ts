import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StandardSanctionComponent } from './modules/SanctionForms/standard-sanction/standard-sanction.component';
import { HomeComponent } from './modules/home/home.component';
import { ContactUSComponent } from './modules/common/footer/contact-us/contact-us.component';
import { ControlledGoodsComponent } from './modules/SanctionForms/controlled-goods/controlled-goods.component';
import { ConsultancyServicesComponent } from './modules/SanctionForms/consultancy-services/consultancy-services.component';
import { IranSanctionsComponent } from './modules/SanctionForms/iran-sanctions/iran-sanctions.component';
import { AmendmentComponent } from './modules/amendment/amendment.component';
import { MyWorkqueueComponent } from './modules/workqueue/myWorkqueue/myWorkqueue.component';
import { MyTeamWorkQueueComponent } from './modules/workqueue/myTeamWorkQueue/myTeamWorkQueue.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact-us', component: ContactUSComponent },
  {
    path: 'standard-sanction', component: StandardSanctionComponent,
    children: [
      { path: 'controlled-goods', component: ControlledGoodsComponent }
    ]
  },
  { path: 'controlled-goods', component: ControlledGoodsComponent },
  { path: 'consultancy-services', component: ConsultancyServicesComponent },
  { path: 'iran-sanction', component: IranSanctionsComponent },
  { path: 'my-workqueue', component: MyWorkqueueComponent },
    { path: 'my-team-workqueue', component: MyTeamWorkQueueComponent },

  { path: 'amendment', component: AmendmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [HomeComponent,
  ContactUSComponent,
  StandardSanctionComponent,
  ControlledGoodsComponent,
  ConsultancyServicesComponent,
  IranSanctionsComponent,
  AmendmentComponent,
  MyWorkqueueComponent
]
