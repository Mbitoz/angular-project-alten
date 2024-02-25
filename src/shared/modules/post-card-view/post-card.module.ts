import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from './post-card.component';
import { PrimengModule } from 'src/shared/primeng.module';
import { DialogService } from 'primeng/dynamicdialog';

@NgModule({
  imports: [
    CommonModule,
    PrimengModule
  ],
  declarations: [PostCardComponent],
  exports: [PostCardComponent],
  providers: [DialogService]
})
export class PostCardModule { }
