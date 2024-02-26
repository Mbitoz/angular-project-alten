import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { PostService } from './services/post.service';
import { UserService } from './services/user.service';
import { PrimengModule } from 'src/shared/primeng.module';
import { SharedModule } from 'src/shared/shared.module';
import { CardAndListComponent } from './components/card-and-list/card-and-list.component';
import { OnlyCardComponent } from './components/only-card/only-card.component';
import { OnlyListComponent } from './components/only-list/only-list.component';
import { FormFilterUserComponent } from './components/form-filter-user/form-filter-user.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    PrimengModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    CardAndListComponent,
    OnlyCardComponent,
    OnlyListComponent,
    FormFilterUserComponent,
    PostDetailComponent
  ],
  providers: [
    PostService,
    UserService
  ]
})
export class HomeModule { }
