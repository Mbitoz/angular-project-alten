import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from './post-card.component';
import { PrimengModule } from 'src/shared/primeng.module';

@NgModule({
  imports: [
    CommonModule,
    PrimengModule
  ],
  declarations: [PostCardComponent],
  exports: [ PostCardComponent ]
})
export class PostCardModule { }
