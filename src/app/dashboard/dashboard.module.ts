import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';
import { MatmaduleModule } from '../sharedmodule/matmadule.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedmoduleModule,
    MatmaduleModule
  ]
})
export class DashboardModule { }
