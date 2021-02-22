import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user/user-service.service';
import { User } from '../../models';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userInfo = {} as User;
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.getLoadingData();
    const idUser = this.route.snapshot.paramMap.get('id');
    this.getUser(Number(idUser));
  }

  getLoadingData(): void {
    this.userService.getValueLoading().subscribe((value: boolean) => {
      this.loading = value;
    });
  }

  getUser(id: number): void {
    this.userService.getUserInfo(id).subscribe((data: User) => {
      this.userInfo = data;
    });
  }
}
