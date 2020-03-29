import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [SideNavComponent],
  imports: [
    CommonModule,
    LayoutModule,
    MaterialModule
  ],
  exports: [
    SideNavComponent
  ]
})
export class CoreModule { }
