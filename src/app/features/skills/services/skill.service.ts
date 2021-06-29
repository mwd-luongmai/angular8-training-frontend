import { Injectable } from '@angular/core'
import { ApiService } from '@core/services/api/api.service'
import { Skill } from '../models/skill'

const routes = {
  skillProfile: '/skills/add-skill',
  updateSkill: id => `/skills/update-skill/${id}`,
  getSkill: id => `/skills/${id}`,
}

@Injectable({ providedIn: 'root' })
export class SkillService {
  constructor(private apiService: ApiService  ){}

  createSkillProfile(skill: Skill) {
    return this.apiService.post(routes.skillProfile, skill);
  }

  updateSkillProfile(id: string, skill: Skill) {
    return this.apiService.put(routes.updateSkill(id), skill);
  }

  getSkillProfile(id: string) {
    return this.apiService.get(routes.getSkill(id));
  }
}
