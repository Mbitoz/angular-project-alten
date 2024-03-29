import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/shared/models/user.interface';
import { PostUser } from '../../home.component';

@Component({
  selector: 'app-only-card',
  templateUrl: './only-card.component.html',
  styleUrls: ['./only-card.component.scss']
})
export class OnlyCardComponent implements OnInit {

  @Input() posts: Array<PostUser>;
  @Output() onDeletePost: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

}
