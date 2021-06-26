import { Injectable } from '@angular/core'
import { AuthenticationService } from '@core/services/authentication/authentication.service'
import { ApiService } from '@core/services/api/api.service'
import { Skill } from '../models/skill'

const routes = {
  skillProfile: 'skills/skill-profile'
}

@Injectable({ providedIn: 'root' })
export class SkillService {
  constructor(private apiService: ApiService  ){}

  createSkillProfile(skill: Skill) {
    return this.apiService.post(routes.skillProfile, skill);
  }
}
