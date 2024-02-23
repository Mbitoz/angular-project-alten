import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/shared/models/post.interface';
import { User } from 'src/shared/models/user.interface';

@Component({
  selector: 'app-only-card',
  templateUrl: './only-card.component.html',
  styleUrls: ['./only-card.component.scss']
})
export class OnlyCardComponent implements OnInit {

  @Input() posts: Array<Post>;
  @Input() users: Array<User>;

  constructor() { }

  ngOnInit() {
  }

  getUserPost(userId: number): User {
    return this.users.find(u => u.id === userId);
  }

}
