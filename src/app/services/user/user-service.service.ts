import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loadingData: BehaviorSubject<boolean>;

  constructor(
    private httClient: HttpClient,
  ) {
    this.loadingData = new BehaviorSubject<boolean>(false);
  }

  getListUser(): Observable<User[]> {
    try {
      this.setValueLoading(true);
      return this.httClient.get<User[]>(`${environment.api_url}/users`);
    } catch (e) {
      console.log(e);
      return e;
    } finally {
      this.setValueLoading(false);
    }
  }

  setValueLoading(value: boolean): void {
    this.loadingData.next(value);
  }

  getValueLoading(): Observable<boolean> {
    return this.loadingData;
  }

  getUserInfo(id: number): Observable<User> {
    try {
      this.setValueLoading(true);
      return this.httClient.get<User>(`${environment.api_url}/users/${id}`);
    } catch (e) {
      console.log(e);
      return e;
    } finally {
      this.setValueLoading(false);
    }
  }
}
