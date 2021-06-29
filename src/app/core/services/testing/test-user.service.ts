import { Injectable } from '@angular/core'
import { UserService } from '..'
import { User } from '@app/core'
import { Observable } from 'rxjs'
import { asyncData } from '@app/shared/testing'
import { getTestUsers } from '@app/core/models/testing/test-users'
import { SearchMethod } from '@app/shared'

@Injectable({ providedIn: 'root' })
export class TestUserService extends UserService {
  testUsers: User[]

  constructor() {
    super(null, null)
    this.testUsers = getTestUsers()
  }

  update(user: User): Observable<User> {
    return asyncData(user)
  }

  forgotPassword(
    email: string,
    url: string
  ): Observable<string> {
    return asyncData('')
  }
  
  resetPassword(
    password: string,
    resetToken: string
  ): Observable<string> {
    return asyncData('')
  }

  delete(id: string): Observable<string> {
    return asyncData('{"message":"Password is incorrect."}')
  }

  deleteAccount(id: string, password: string) {
    if (password === "wrongP@sswo3d") {
      return asyncData(Error('Password is incorrect.'))
    }
    return this.delete(id);
  }

  search(keyword: string, method: string): Observable<User[]> {
    let users = [] as User[]
    keyword = decodeURIComponent(keyword).toLowerCase()
    method = method.toString()

    if (method === SearchMethod.Name.toString()) {
      users = this.testUsers.filter(user =>
        user.name.toLowerCase().includes(keyword)
      )
    } else if (method === SearchMethod.Username.toString()) {
      users = this.testUsers.filter(user =>
        user.username.toLowerCase().includes(keyword)
      )
    } else if (method === SearchMethod.Email.toString()) {
      users = this.testUsers.filter(
        user => user.email.toLowerCase() === keyword
      )
    }
    return asyncData(users)
  }

  active(id: string): Observable<string>{
    return asyncData('')
  }
}
