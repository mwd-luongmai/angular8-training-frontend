import { HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { User } from '@core/models'
import { JsonConvert } from 'json2typescript'
import { map, tap } from 'rxjs/operators'
import { AuthenticationService } from '../authentication/authentication.service'
import { ApiService } from '../api/api.service'

const routes = {
  users: '/users',
  user: (id: string) => `/users/${id}`,
  register: '/users/register',
  changePassword: (id: string) => `/users/${id}/password`,
  deactivate: (id: string) => `/users/${id}/deactivate`,
  search: (keyword: string, method: string) =>
    `/users/search/${keyword}/${method}`,
  deleteAccount: '/users/deleteAccount',
  forgotPassword: '/users/forgot-password',
  resetPassword: '/users/reset-password',
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private jsonConvert: JsonConvert
  constructor(
    private apiService: ApiService,
    private authenticationService: AuthenticationService
  ) {
    this.jsonConvert = new JsonConvert()
  }

  getAll() {
    return this.apiService.get(routes.users).pipe(
      map(users => {
        return this.jsonConvert.deserializeArray(users, User)
      })
    )
  }

  getById(id: string) {
    return this.apiService.get(routes.user(id)).pipe(
      map(user => {
        return this.jsonConvert.deserialize(user, User)
      })
    )
  }

  update(user: User) {
    return this.apiService.put(routes.user(user.id), user).pipe(
      tap(_ => {
        this.updateUserLocal(user)
      })
    )
  }

  delete(id: string) {
    return this.apiService.delete(routes.user(id))
  }

  deactivate(id: string) {
    return this.apiService.put(routes.deactivate(id))
  }

  deleteAccount(id: string, password: string) {
    const body = { id, password }
    const options = {
      headers: new HttpHeaders({}),
      body,
    }
    return this.apiService.delete(routes.deleteAccount, options)
  }

  updateUserLocal(user: User) {
    const currentUser = this.authenticationService.currentUserValue as User
    if (!!currentUser && !!user) {
      const mappedUser = this.jsonConvert.deserialize(user, User) as User
      currentUser.name =
        mappedUser.name !== undefined && mappedUser.name !== null
          ? mappedUser.name
          : currentUser.name
      currentUser.bio =
        mappedUser.bio !== undefined && mappedUser.bio !== null
          ? mappedUser.bio
          : currentUser.bio
      currentUser.company =
        mappedUser.company !== undefined && mappedUser.company !== null
          ? mappedUser.company
          : currentUser.company
      currentUser.location =
        mappedUser.location !== undefined && mappedUser.location !== null
          ? mappedUser.location
          : currentUser.location
      currentUser.email =
        mappedUser.email !== undefined && mappedUser.email !== null
          ? mappedUser.email
          : currentUser.email
      currentUser.username =
        mappedUser.username !== undefined && mappedUser.username !== null
          ? mappedUser.username
          : currentUser.username
      currentUser.active =
        mappedUser.active !== undefined && mappedUser.active !== null
          ? mappedUser.active
          : currentUser.active

      localStorage.setItem('currentUser', JSON.stringify(currentUser))
      this.authenticationService.refreshLocalData()
    }
  }

  forgotPassWord(email: string, url: string) {
    return this.apiService.post(routes.forgotPassword, { email,  url});
  }

  resetPassWord(resetToken: string, password: string) {
    return this.apiService.post(routes.resetPassword, { resetToken,  password});
  }
}
