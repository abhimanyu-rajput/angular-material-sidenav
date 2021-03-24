import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';
import { MatmaduleModule } from '../sharedmodule/matmadule.module';
import { AsyncValidatorComponent } from './async-validator/async-validator.component';


@NgModule({
  declarations: [DashboardComponent, AsyncValidatorComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedmoduleModule,
    MatmaduleModule
  ]
})
export class DashboardModule { }
