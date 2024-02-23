import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/shared/models/post.interface';
import { User } from 'src/shared/models/user.interface';

@Component({
  selector: 'app-card-and-list',
  templateUrl: './card-and-list.component.html',
  styleUrls: ['./card-and-list.component.scss']
})
export class CardAndListComponent implements OnInit {

  @Input() posts: Array<Post>;
  @Input() users: Array<User>;

  constructor() { }

  ngOnInit() {
  }

  getUserPost(userId: number): User {
    return this.users.find(u => u.id === userId);
  }

}
