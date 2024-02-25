import { Component, Input, OnInit } from '@angular/core';
import { PostUser } from '../../home.component';

@Component({
  selector: 'app-only-list',
  templateUrl: './only-list.component.html',
  styleUrls: ['./only-list.component.scss']
})
export class OnlyListComponent implements OnInit {

  @Input() posts: Array<PostUser>;

  constructor() { }

  ngOnInit() {
  }

}
