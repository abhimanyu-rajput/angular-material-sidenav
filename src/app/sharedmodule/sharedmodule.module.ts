import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const deps = [CommonModule,FlexLayoutModule, FormsModule, ReactiveFormsModule]

@NgModule({
  declarations: [],
  imports: [deps],
  exports: [deps]
})
export class SharedmoduleModule { }
