import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncValidatorComponent } from './async-validator/async-validator.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: 'dashboard', component:DashboardComponent, children: [
    {path: 'async-validation', component:AsyncValidatorComponent}
  ]},
  {path:'', redirectTo:'dashboard', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
