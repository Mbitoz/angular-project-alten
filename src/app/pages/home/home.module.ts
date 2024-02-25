import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './services/post.service';
import { UserService } from './services/user.service';
import { PrimengModule } from 'src/shared/primeng.module';
import { SharedModule } from 'src/shared/shared.module';
import { CardAndListComponent } from './components/card-and-list/card-and-list.component';
import { OnlyCardComponent } from './components/only-card/only-card.component';
import { OnlyListComponent } from './components/only-list/only-list.component';
import { FormFilterUserComponent } from './components/form-filter-user/form-filter-user.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    PrimengModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    CardAndListComponent,
    OnlyCardComponent,
    OnlyListComponent,
    FormFilterUserComponent
  ],
  providers: [
    PostService,
    UserService
  ]
})
export class HomeModule { }
