import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

const deps = [CommonModule,MatSidenavModule,MatToolbarModule,MatIconModule]


@NgModule({
  declarations: [],
  imports: [deps],
  exports: [deps]
})
export class MatmaduleModule { }
