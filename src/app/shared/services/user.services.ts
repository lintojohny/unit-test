import { inject, Injectable } from '@angular/core';
import { UserInterface } from '../types/user.interface';
import { UtilService } from '../utils/utils.service';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UserService {
  // # with dependent
  //   utilService = inject(UtilService);
  //   users: UserInterface[] = [];

  //   addUser(user: UserInterface): void {
  //     this.users = [...this.users, user];
  //   }
  //   removeUser(userId: string): void {
  //     const updatedUsers = (this.users = this.users.filter(
  //       (user) => user.id !== userId
  //     ));
  //     this.users = updatedUsers;
  //   }
  //   getUserNames(): string[] {
  //     return this.utilService.pluck(this.users, 'name');
  //   }

  // # test behavioral subject

  users$ = new BehaviorSubject(<UserInterface[]>[]);

  addUser(user: UserInterface): void {
    this.users$.next([...this.users$.getValue(), user]);
  }
  removeUser(userId: string): void {
    const updatedUsers = this.users$
      .getValue()
      .filter((user) => user.id != userId);
    this.users$.next(updatedUsers);
  }
}
