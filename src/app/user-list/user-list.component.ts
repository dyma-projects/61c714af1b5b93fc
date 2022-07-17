import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../shared/services/user.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
  public users: string[];
  private subscription: Subscription = new Subscription();

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.subscription.add(
      this.userService.user$.subscribe((user: string[]) => {
        this.users = user;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
