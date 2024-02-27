import { Component, Input, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { PostUser } from 'src/app/pages/home/home.component';
import { ModalDetailComponent } from '../../components/modal-detail/modal-detail.component';

@Component({
  selector: 'app-basic-view',
  templateUrl: './basic-view.component.html',
  styleUrls: ['./basic-view.component.scss']
})
export class BasicViewComponent implements OnInit {

  @Input() posts: Array<PostUser>;

  constructor(public dialogService: DialogService) { }

  ngOnInit() {
  }


  openDialog(post: PostUser){
    const ref = this.dialogService.open(ModalDetailComponent, {
      header: 'Dettaglio Post',
      width: '70%',
      data: {
        detailPost: post
      }
  });
  }

}
