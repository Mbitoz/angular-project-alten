import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/shared/models/user.interface';

@Component({
  selector: 'app-form-filter-user',
  templateUrl: './form-filter-user.component.html',
  styleUrls: ['./form-filter-user.component.scss']
})
export class FormFilterUserComponent implements OnInit {

  @Input() users: User;
  @Output() onFilter: EventEmitter<number> = new EventEmitter<number>();

  formUser: FormGroup;

  constructor() { }

  ngOnInit() {
    this.formUser = new FormGroup({
      user: new FormControl(),
    });
  }

  onSubmit(){
    this.onFilter.emit(this.formUser.controls['user'].value);
  }

  resetUser(){
    this.formUser.controls['user'].setValue(null);
    this.onFilter.emit(null);
  }

}
