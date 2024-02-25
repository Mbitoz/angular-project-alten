import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CustomSkeletonComponent } from './components/custom-skeleton/custom-skeleton.component';
import { PrimengModule } from './primeng.module';
import { ThemeService } from './services/theme.service';
import { FormsModule } from '@angular/forms';
import { ModalDetailComponent } from './components/modal-detail/modal-detail.component';
import { BasicViewModule } from './modules/basic-view/basic-view.module';
import { PostCardModule } from './modules/post-card-view/post-card.module';

@NgModule({
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule,
    BasicViewModule,
    PostCardModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    CustomSkeletonComponent,
    ModalDetailComponent
  ],
  exports: [
    FormsModule,
    HeaderComponent,
    FooterComponent,
    CustomSkeletonComponent,
    BasicViewModule,
    PostCardModule
  ],
  providers: [
    ThemeService
  ]
})
export class SharedModule { }
