import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

const deps = [CommonModule,MatSidenavModule,MatToolbarModule,MatIconModule,MatButtonModule, MatInputModule]


@NgModule({
  declarations: [],
  imports: [deps],
  exports: [deps]
})
export class MatmaduleModule { }
