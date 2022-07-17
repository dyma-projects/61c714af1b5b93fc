import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor() { }

  addUser(user: string) {
    this.user$.next([...this.user$.value, user]);
  }
}
