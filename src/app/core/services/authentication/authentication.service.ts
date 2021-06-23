import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { User } from '@core/models'
import { JsonConvert } from 'json2typescript'
import { ApiService } from '../api/api.service'

const routes = {
  login: '/users/authenticate',
  logout: '/users/logout',
  forgotPassWord: '/users/forgot-password',
  resetPassword: '/users/reset-password'
}

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>
  public currentUser: Observable<User>
  public jsonConvert: JsonConvert

  constructor(private apiService: ApiService) {
    this.jsonConvert = new JsonConvert()
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser'))
    )
    this.currentUser = this.currentUserSubject.asObservable()
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value
  }

  login(username: string, password: string) {
    return this.apiService.post(routes.login, { username, password }).pipe(
      map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          const mappedUser = this.jsonConvert.deserialize(user, User) as User
          localStorage.setItem('currentUser', JSON.stringify(mappedUser))
          this.currentUserSubject.next(mappedUser)
        }

        return user
      })
    )
  }

  logout() {
    this.apiService.post(routes.logout).subscribe()
    // remove user from local storage to log user out
    this.invalidate()
  }

  invalidate() {
    localStorage.removeItem('currentUser')
    this.currentUserSubject.next(null)
  }

  refreshLocalData() {
    this.currentUserSubject.next(
      JSON.parse(localStorage.getItem('currentUser'))
    )
  }

  forgotPassWord(email: string, url: string) {
      return this.apiService.post(routes.forgotPassWord, { email,  url});
  }

  resetPassWord(resetToken: string, password: string) {
    return this.apiService.post(routes.resetPassword, { resetToken,  password});
}
}
