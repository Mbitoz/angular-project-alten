import { Component, Input, OnInit } from '@angular/core';
import { PostUser } from 'src/app/pages/home/home.component';
import { Post } from 'src/shared/models/post.interface';
import { User } from 'src/shared/models/user.interface';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  @Input() post: PostUser;

  constructor() { }

  ngOnInit() {
  }

  getUserInitial(fullName: string): string {
    const words = fullName.split(' ');
    const initials = words.map(word => word.charAt(0));
    return initials.join('');
  }

}
