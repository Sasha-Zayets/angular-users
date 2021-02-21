import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { User } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loadingData = false;

  constructor(
    private httClient: HttpClient,
  ) { }

  async getListUser(): Promise<User[]> {
    try {
      this.loadingData = true;
      return await this.httClient
        .get<User[]>(`${environment.api_url}/users`)
        .toPromise();
    } catch (e) {
      console.log(e);
      return e;
    } finally {
      this.loadingData = false;
    }
  }

  async getUserInfo(id: number): Promise<User> {
    try {
      return await this.httClient
        .get(`${environment.api_url}/users/${id}`)
        .toPromise() as User;
    } catch (e) {
      console.log(e);
      return e;
    } finally {
      this.loadingData = false;
    }
  }
}
