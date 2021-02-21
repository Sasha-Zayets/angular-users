import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user-service.service';
import { User } from '../../models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listUsers: User[] = [];
  listAllUsers: User[] = [];
  searchUser = '';

  constructor(
    private userService: UserService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.listUsers = await this.userService.getListUser();
    this.listAllUsers = this.listUsers;
  }

  clearSearch(): void {
    this.searchUser = '';
  }

  filterUser(): void {
    this.listUsers = this.listAllUsers.filter(el => {
      const name = el.name.toLocaleUpperCase();
      return name.includes(this.searchUser.toLocaleUpperCase());
    });
  }
}
