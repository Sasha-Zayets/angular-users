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

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
  ) {}

  async ngOnInit(): Promise<void> {
    const idUser = this.route.snapshot.paramMap.get('id');
    this.userInfo = await this.userService.getUserInfo(Number(idUser));
  }

}
