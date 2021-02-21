import {Component, Input, EventEmitter, OnInit, Output} from '@angular/core';
import { User } from '../../models';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})

export class UserCardComponent implements OnInit {
  @Input() user: User;
  @Output() handleRemoveUser = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {
  }

  removeUser(): void {
    this.handleRemoveUser.emit(this.user.id);
  }
}
