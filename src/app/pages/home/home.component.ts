import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';
import { UserService } from './services/user.service';
import { forkJoin } from 'rxjs';
import { Post } from 'src/shared/models/post.interface';
import { User } from 'src/shared/models/user.interface';

export interface PostUser extends Post {
  userPostIt?: User;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  users: Array<User> = [];
  postWithUser: Array<PostUser> = [];
  layoutOption: Array<{ name: string, value: number }> = [
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
        this.postWithUser = values[0];
        this.users = values[1];
      },
      error: (e) => console.error(e),
      complete: () => {
        this.postWithUser.forEach(
          post => {
            post.userPostIt = this.users.find(u => u.id === post.userId);
          }
        );
        this.loadingData = false;
      }
    })
  }


  deletePost(postId: number): void {
    const index = this.postWithUser.findIndex(post => post.id === postId);
    if (index !== -1) {
      this.postWithUser.splice(index, 1);
    }
  }
}
