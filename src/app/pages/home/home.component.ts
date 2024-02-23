import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';
import { UserService } from './services/user.service';
import { forkJoin } from 'rxjs';
import { Post } from 'src/shared/models/post.interface';
import { User } from 'src/shared/models/user.interface';

interface layoutOption {
  name: string;
  value: number;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  posts: Array<Post> = [];
  users: Array<User> = [];
  layoutOption: Array<layoutOption> = [
    {name: 'List', value: 1},
    {name: 'Card', value: 2},
    {name: 'List | Card', value: 3}
  ];
  layoutValue: number = 1;
  loadingData: boolean = true;

  constructor(
    private postService: PostService,
    private userService: UserService
  ) { }

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
}
