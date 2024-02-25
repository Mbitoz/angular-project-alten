import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostUser } from 'src/app/pages/home/home.component';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  @Input() post: PostUser;
  @Input() canDelete: boolean = true;
  @Output() onDeletePost: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  getUserInitial(fullName: string): string {
    const words = fullName.split(' ');
    const initials = words.map(word => word.charAt(0));
    return initials.join('');
  }

}
