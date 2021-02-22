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

  ngOnInit(): void {
    this.getUser();
    this.listAllUsers = this.listUsers;
  }

  getUser(): void {
    this.userService.getListUser().subscribe((data: User[]) => {
      this.listUsers = data;
    });
  }

  clearSearch(): void {
    this.searchUser = '';
    this.listUsers = this.listAllUsers;
  }

  filterUser(): void {
    this.listUsers = this.listAllUsers.filter(el => {
      const name = el.name.toLocaleUpperCase();
      return name.includes(this.searchUser.toLocaleUpperCase());
    });
  }

  removeUser(idUser: number): void {
    this.listUsers = this.listUsers.filter(el => el.id !== idUser);
  }
}
