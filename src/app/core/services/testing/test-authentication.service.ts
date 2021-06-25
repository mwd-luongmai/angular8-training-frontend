import { asyncData } from '@app/shared/testing'
import { AuthenticationService } from '..'
import { Injectable } from '@angular/core'
import { Observable, BehaviorSubject } from 'rxjs'
import { User } from '@app/core'
import { getTestUsers } from '@app/core/models/testing/test-users'

@Injectable({ providedIn: 'root' })
export class TestAuthenticationService extends AuthenticationService {
  public currentUser: Observable<User>
  public users: User[]

  constructor() {
    super(null)
    this.users = getTestUsers()
    this.currentUser = new BehaviorSubject<User>(
      this.currentUserValue
    ).asObservable()
  }

  public get currentUserValue(): User {
    return this.users[0]
  }

  public logout(): Observable<string> {
    return asyncData('')
  }

  public signUp(): Observable<string> {
    return asyncData('')
  }
}
