import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { UserService } from '../../services/user.service';
import { forkJoin } from 'rxjs';
import { User } from 'src/shared/models/user.interface';
import { PostUser } from '../../home.component';
import { Post } from 'src/shared/models/post.interface';
import { Location } from '@angular/common';


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  postId: number;
  users: Array<User> = [];
  postWithUser: PostUser;
  allPosts: Array<Post> = [];
  loadingData: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private userService: UserService,
    private location: Location
    ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.postId = parseInt(params['id']);
    });
    const posts$ = this.postService.getPosts();
    const users$ = this.userService.getUsers();
    forkJoin([
      posts$,
      users$
    ]).subscribe({
      next: (values) => {
        this.allPosts = values[0];
        this.users = values[1];
      },
      error: (e) => console.error(e),
      complete: () => {
        this.postWithUser = this.allPosts.find(p => p.id === this.postId);
        this.postWithUser.userPostIt = this.users.find(u => u.id === this.postWithUser.userId);
        this.loadingData = false;
      }
    })
  }

  goBack(): void{
    this.location.back();
  }

}
