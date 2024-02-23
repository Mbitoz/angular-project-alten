import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CustomSkeletonComponent } from './components/custom-skeleton/custom-skeleton.component';
import { PrimengModule } from './primeng.module';
import { ThemeService } from './services/theme.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    CustomSkeletonComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CustomSkeletonComponent,
    FormsModule
  ],
  providers: [
    ThemeService
  ]
})
export class SharedModule { }
