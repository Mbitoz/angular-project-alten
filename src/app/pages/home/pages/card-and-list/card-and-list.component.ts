import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/shared/models/post.interface';
import { User } from 'src/shared/models/user.interface';
import { PostUser } from '../../home.component';

@Component({
  selector: 'app-card-and-list',
  templateUrl: './card-and-list.component.html',
  styleUrls: ['./card-and-list.component.scss']
})
export class CardAndListComponent implements OnInit {

  @Input() posts: Array<PostUser>;

  constructor() { }

  ngOnInit() {
  }

}
