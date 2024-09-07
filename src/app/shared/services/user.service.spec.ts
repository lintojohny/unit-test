import { TestBed } from '@angular/core/testing';
import { UserService } from './user.services';
import { UserInterface } from '../types/user.interface';
import { UtilService } from './../utils/utils.service';

describe('UserService', () => {
  //   let userService: UserService;
  //   let utilService: UtilService; // spy method
  //   //   const utilServiceMock = { //mock method
  //   //     pluck: jest.fn(),
  //   //   };
  //   beforeEach(() => {
  //     TestBed.configureTestingModule({
  //       providers: [
  //         UserService,
  //         UtilService, // spy method
  //         // { provide: UtilService, useValue: utilServiceMock }, //mock method
  //       ],
  //     });
  //     userService = TestBed.inject(UserService);
  //     utilService = TestBed.inject(UtilService); // spy method
  //   });
  //   it('creates a service', () => {
  //     expect(userService).toBeTruthy();
  //   });
  //   describe('add user', () => {
  //     const user: UserInterface = {
  //       id: '3',
  //       name: 'foo',
  //     };
  //     it('it should add user', () => {
  //       userService.addUser(user);
  //       expect(userService.users).toEqual([
  //         {
  //           id: '3',
  //           name: 'foo',
  //         },
  //       ]);
  //     });
  //   });
  //   describe('remove user', () => {
  //     it('should remove user', () => {
  //       userService.users = [
  //         {
  //           id: '1',
  //           name: 'foo',
  //         },
  //       ];
  //       userService.removeUser('1');
  //       expect(userService.users).toEqual([]);
  //     });
  //   });
  //   describe('get user names', () => {
  //     //mock method
  //     //   it('should return all the usernames', () => {
  //     //     utilServiceMock.pluck.mockReturnValue(['foo'])
  //     //   expect(userService.getUserNames()).toEqual(['foo']);
  //     //   });
  //     it('should get usernames', () => {
  //       // spy method
  //       jest.spyOn(utilService, 'pluck');
  //       userService.users = [
  //         {
  //           id: '1',
  //           name: 'foo',
  //         },
  //       ];
  //       userService.getUserNames();
  //       expect(utilService.pluck).toHaveBeenCalledWith(userService.users, 'name');
  //     });
  //   });
  // # using rxjs operator
  let userService: UserService;
  let utilService: UtilService; // spy method
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserService,
        UtilService, // spy method
        // { provide: UtilService, useValue: utilServiceMock }, //mock method
      ],
    });
    userService = TestBed.inject(UserService);
    utilService = TestBed.inject(UtilService); // spy method
  });
  it('creates a service', () => {
    expect(userService).toBeTruthy();
  });
  describe('add user', () => {
    const user: UserInterface = {
      id: '3',
      name: 'foo',
    };
    it('it should add user', () => {
      userService.addUser(user);
      expect(userService.users$.getValue()).toEqual([
        {
          id: '3',
          name: 'foo',
        },
      ]);
    });
  });
  describe('remove user', () => {
    it('should remove user', () => {
      userService.users$.next([
        {
          id: '1',
          name: 'foo',
        },
      ]);
      userService.removeUser('1');
      expect(userService.users$.getValue()).toEqual([]);
    });
  });
  describe('get user names', () => {
    //mock method
    //   it('should return all the usernames', () => {
    //     utilServiceMock.pluck.mockReturnValue(['foo'])
    //   expect(userService.getUserNames()).toEqual(['foo']);
    //   });
  });
});
