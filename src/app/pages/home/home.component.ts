import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';
import { UserService } from './services/user.service';
import { forkJoin } from 'rxjs';
import { Post } from 'src/shared/models/post.interface';
import { User } from 'src/shared/models/user.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: Array<Post> = [];
  users: Array<User> = [];

  loadingData: boolean = true;

  constructor(
    private postService: PostService,
    private userService: UserService) { }

  ngOnInit() {
    const posts$ = this.postService.getPosts();
    const users$ = this.userService.getUsers();
    forkJoin([
      posts$,
      users$
    ]).subscribe({
      next: (values) => {
        this.posts = values[0];
        this.users = values[1];
      },
      error: (e) => console.error(e),
      complete: () => {
        this.posts.forEach(
          post => {
            post
          }
        );
        this.loadingData = false;
      }
    })
  }

  getUserPost(userId: number): User {
    return this.users.find(u => u.id === userId);
  }

}
