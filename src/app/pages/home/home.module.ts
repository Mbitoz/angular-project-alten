import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './services/post.service';
import { UserService } from './services/user.service';
import { PrimengModule } from 'src/shared/primeng.module';
import { PostCardModule } from 'src/shared/modules/post-card/post-card.module';
import { SharedModule } from 'src/shared/shared.module';
import { CardAndListComponent } from './pages/card-and-list/card-and-list.component';
import { OnlyCardComponent } from './pages/only-card/only-card.component';
import { OnlyListComponent } from './pages/only-list/only-list.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    PrimengModule,
    PostCardModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    CardAndListComponent,
    OnlyCardComponent,
    OnlyListComponent
  ],
  providers: [
    PostService,
    UserService
  ]
})
export class HomeModule { }
