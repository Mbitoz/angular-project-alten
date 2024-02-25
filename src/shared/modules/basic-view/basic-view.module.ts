import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicViewComponent } from './basic-view.component';
import { PrimengModule } from 'src/shared/primeng.module';
import { DialogService } from 'primeng/dynamicdialog';

@NgModule({
  imports: [
    CommonModule,
    PrimengModule
  ],
  declarations: [BasicViewComponent],
  exports: [BasicViewComponent],
  providers: [DialogService]
})
export class BasicViewModule { }
