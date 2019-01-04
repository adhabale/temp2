import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatNativeDateModule,
    Material.MatInputModule,
    Material.MatSelectModule,
    Material.MatIconModule,
    Material.MatButtonModule,
    Material.MatRadioModule,
    Material.MatSlideToggleModule,
    Material.MatButtonToggleModule,
    Material.MatDatepickerModule,
    Material.MatCheckboxModule,
    Material.MatFormFieldModule,
    Material.MatStepperModule,
    Material.MatMenuModule,
    Material.MatExpansionModule,
    Material.MatPaginatorModule,
    Material.MatBadgeModule,
  ],
  exports: [
    Material.MatNativeDateModule,
    Material.MatInputModule,
    Material.MatSelectModule,
    Material.MatIconModule,
    Material.MatButtonModule,
    Material.MatRadioModule,
    Material.MatSlideToggleModule,
    Material.MatButtonToggleModule,
    Material.MatDatepickerModule,
    Material.MatCheckboxModule,
    Material.MatFormFieldModule,
    Material.MatStepperModule,
    Material.MatMenuModule,
    Material.MatExpansionModule,
    Material.MatPaginatorModule,
    Material.MatBadgeModule,
  ]
})
export class MaterialModule { }
