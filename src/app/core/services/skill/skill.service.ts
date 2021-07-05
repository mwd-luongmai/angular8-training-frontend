import { Injectable } from '@angular/core'
import { ApiService } from '@core/services/api/api.service'
import { Skill } from '@core/models/skill'
import { map } from 'rxjs/operators';

const routes = {
  skillProfile: '/skills/add-skill',
  updateSkill: id => `/skills/update-skill/${id}`,
  getSkill: id => `/skills/${id}`,
  getSkills:'/skills',
  getAllSkills: '/skills',
  searchSkill: name => `/skills/search/${name}`,
  assignSkill: (skillId, skillLevelId, userId) => `/users/assign-skill/${skillId}/${skillLevelId}/${userId}`,
  removeUserSkill: (skillId, userId) => `/users/remove-skill/${skillId}/${userId}`,
  updateUserSkill: (id, skillId, skillLevelId, userId) => `/users/update-skill/${id}/${skillId}/${skillLevelId}/${userId}`,

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
  getSkills(){
    return this.apiService.get(routes.getSkills)
  }
  getAllSkills() {
    return this.apiService.get(routes.getAllSkills);
  }

  searchSkill(name: string) {
    return this.apiService.get(routes.searchSkill(name));
  }

  assignSkill(skillId: string, skillLevelId: string, userId: string) {
    return this.apiService.put(routes.assignSkill(skillId, skillLevelId, userId));
  }

  removeUserSkill(skillId: string, userId: string) {
    return this.apiService.put(routes.removeUserSkill(skillId, userId));
  }

  updateUserSkill(id: string, skillId: string, skillLevelId: string, userId: string) {
    return this.apiService.put(routes.updateUserSkill(id, skillId, skillLevelId, userId));
  }
}
